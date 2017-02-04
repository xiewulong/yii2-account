<?php
namespace yii\account\controllers;

use Yii;
use yii\components\Controller;
use yii\data\Pagination;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\helpers\ArrayHelper;
use yii\helpers\Json;
use yii\web\NotFoundHttpException;

class SignController extends Controller {

	public $defaultAction = 'in';

	public function behaviors() {
		return [
			'access' => [
				'class' => AccessControl::className(),
				'rules' => [
					[
						'actions' => ['captcha', 'error', 'in', 'up'],
						'allow' => true,
					],
					[
						'actions' => ['out'],
						'allow' => true,
						'roles' => $this->module->permissions,
					],
				],
			],
			'verbs' => [
				'class' => VerbFilter::className(),
				'actions' => [
					'out' => ['post'],
				],
			],
		];
	}

	public function actions() {
		return [
			'captcha' => [
				'class' => 'yii\captcha\CaptchaAction',
			],
		];
	}

	public function actionIn($code = null, $state = null) {
		if(!\Yii::$app->user->isGuest) {
			return $this->goBack();
		}

		$_user = [];

		$user = new $this->module->identityClass;
		$user->scenario = 'login';
		if($user->load(\Yii::$app->request->post())) {
			$done = $user->loginHandler();
			if(\Yii::$app->request->isAjax) {
				return $this->respond([
					'error' => !$done,
					'message' => $done ? \Yii::t($this->module->messageCategory, 'operation succeeded') : $user->firstErrorInFirstErrors,
				]);
			} else if($done) {
				return $this->goBack();
			}
		}

		if($this->module->wechatAccountEnabled
			&& !$_user
			&& !\Yii::$app->request->isAjax
			&& $this->module->wechat->isBuildInBrowser
		) {
			if(!$code) {
				return $this->redirect($this->module->wechat->getUserAuthorizeCodeUrl('base'));
			}

			$userinfo = $this->module->wechat->getUserInfoByCode($code);
			if(!$userinfo || !isset($userinfo['openid'])) {
				return $this->redirect(['/' . $this->route]);
			}

			$wechatUser = $this->module->wechat->findUser($userinfo['openid']);
			if(!$wechatUser) {
				if($state == 'base') {
					return $this->redirect($this->module->wechat->getUserAuthorizeCodeUrl('userinfo', 'snsapi_userinfo'));
				}

				$wechatUser = $this->module->wechat->saveUser($userinfo);
			}

			if($wechatUser->user_id && ($__user = $this->module->identityClass::findOne($wechatUser->user_id))) {
				\Yii::$app->user->login($__user, 0);

				return $this->goBack();
			}

			$_user['id'] = $wechatUser['openid'];
			$_user['name'] = $wechatUser['name'];
			$_user['face'] = $wechatUser['headImageUrl'];
			$_user['type'] = 'wechat';
		}

		return $this->render($this->action->id, [
			'user' => $user,
			'_user' => $_user,
		]);
	}

	public function actionOut() {
		\Yii::$app->user->logout();

		return \Yii::$app->request->isAjax ? $this->respond(['error' => 0, 'message' => \Yii::t($this->module->messageCategory, 'operation succeeded')]) : $this->goBack();
	}

	public function actionUp() {
		if(!\Yii::$app->user->isGuest) {
			return $this->goBack();
		}

		if(\Yii::$app->request->isPost) {
			$id = \Yii::$app->request->post('id', 0);
			$type = \Yii::$app->request->post('type', null);
			if($id && $type) {
				$_user = null;
				$__user = null;
				switch($type) {
					case 'wechat':
						if($this->module->wechatAccountEnabled) {
							$_user = $this->module->wechat->findUser($id);
							if($_user && $_user->user_id) {
								$__user = $this->module->identityClass::findOne($_user->user_id);
							}
						}
						break;
				}

				if($_user && !$__user) {
					$user = new $this->module->identityClass;
					$user->scenario = 'blank';
					$user->generateAuthKey();
					$user->status = $this->module->identityClass::STATUS_BLANK;
					if($user->save()) {
						$_user->user_id = $user->id;
						$_user->save();
					}
				}

				return $this->redirect(['in']);
			}

			return $this->refresh();
		}

		return null;
	}

}
