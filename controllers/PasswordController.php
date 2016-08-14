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

use yii\account\models\User;

class PasswordController extends Controller {

	public $defaultAction = 'forgot';

	public function behaviors() {
		return [
			'access' => [
				'class' => AccessControl::className(),
				'rules' => [
					[
						'actions' => ['forgot'],
						'allow' => true,
					],
					[
						'actions' => ['reset'],
						'allow' => true,
						'roles' => ['@'],
					],
				],
			],
			'verbs' => [
				'class' => VerbFilter::className(),
				'actions' => [
					'reset' => ['post'],
				],
			],
		];
	}

	public function actionReset() {
		$user = \Yii::$app->user->identity;
		$user->scenario = 'password-reset';
		$user->messageCategory = $this->module->messageCategory;
		$done = $user->load(\Yii::$app->request->post()) && $user->passwordResetHandler();

		return \Yii::$app->request->isAjax ? $this->respond([
			'error' => !$done,
			'message' => $done ? \Yii::t($this->module->messageCategory, 'Operation succeeded') : $user->firstErrorInFirstErrors,
		]) : $this->goBack();
	}

}
