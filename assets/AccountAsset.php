<?php
namespace yii\account\assets;

use Yii;
use yii\web\AssetBundle;

class AccountAsset extends AssetBundle {

	public $sourcePath = '@vendor/xiewulong/yii2-account/statics';

	public $css = [
		'css/account.css',
	];

	public $js = [
		'js/account.js',
	];

	public $depends = [
		'yii\web\JqueryAsset',
		'yii\bootstrap\BootstrapPluginAsset',
	];

	public function init() {
		parent::init();

		$controller = \Yii::$app->controller;
		$filename = $controller->module->id . '.' . $controller->id;
		$this->css[] = 'css/' . $filename . '.css';
		$this->js[] = 'js/' . $filename . '.js';
	}

}
