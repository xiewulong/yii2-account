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

class UserController extends Controller {

	public $defaultAction = 'login';

	public function behaviors() {
		return [
			'access' => [
				'class' => AccessControl::className(),
				'rules' => [
					[
						'actions' => ['error', 'captcha', 'login'],
						'allow' => true,
					],
					[
						'actions' => ['logout'],
						'allow' => true,
						'roles' => $this->module->permissions,
					],
				],
			],
			'verbs' => [
				'class' => VerbFilter::className(),
				'actions' => [
					'logout' => [YII_ENV == 'prod' ? 'post' : 'get'],
				],
			],
		];
	}

	public function actions() {
		return [
			'error' => [
				'class' => 'yii\web\ErrorAction',
			],
			'captcha' => [
				'class' => 'yii\captcha\CaptchaAction',
			],
		];
	}

	public function actionLogin() {
		if(!\Yii::$app->user->isGuest) {
			return $this->goBack();
		}

		$user = new $this->module->identityClass;
		$user->scenario = 'login';
		if($user->load(\Yii::$app->request->post())) {
			$done = $user->loginHandler();
			if(\Yii::$app->request->isAjax) {
				return $this->respond([
					'error' => !$done,
					'message' => $done ? \Yii::t($this->module->messageCategory, 'Operation succeeded') : $user->firstErrorInFirstErrors,
				]);
			} else if($done) {
				return $this->goBack();
			}
		}

		return $this->render($this->action->id, [
			'user' => $user,
		]);
	}

	public function actionLogout() {
		\Yii::$app->user->logout();

		return \Yii::$app->request->isAjax ? $this->respond(['error' => 0, 'message' => \Yii::t($this->module->messageCategory, 'Operation succeeded')]) : $this->goBack();
	}

}
