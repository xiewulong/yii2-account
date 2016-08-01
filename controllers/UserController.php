<?php
namespace yii\account\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\NotFoundHttpException;
use yii\account\components\Controller;
use yii\account\models\User;

class UserController extends Controller {

	public $defaultAction = 'login';

	public function behaviors() {
		return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'actions' => ['login'],
                        'allow' => true,
                    ],
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
			'verbs' => [
				'class' => VerbFilter::className(),
				'actions' => [
					'logout' => ['post'],
				],
			],
		];
	}

	public function actionLogin() {
		if(!\Yii::$app->user->isGuest) {
			return $this->goBack();
		}

		$model = new User;
		$model->messageCategory = $this->module->messageCategory;
		if($model->load(\Yii::$app->request->post())) {
			$logined = $model->login();
			if(\Yii::$app->request->isAjax) {
				return $this->respond([
					'error' => $logined ? 0 : 1,
					'message' => \Yii::t($this->module->messageCategory, 'Operation ' . ($logined ? 'succeeded' : 'failed')),
				]);
			} else if($logined) {
				return $this->goBack();
			}
		}

		return $this->render($this->action->id, [
			'model' => $model,
		]);
	}

	public function actionLogout() {
		\Yii::$app->user->logout();

		return \Yii::$app->request->isAjax ? $this->respond(['status' => 1, 'message' => \Yii::t($this->module->messageCategory, 'Operation succeeded')]) : $this->goBack();
	}

}
