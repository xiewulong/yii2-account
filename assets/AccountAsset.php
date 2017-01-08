<?php
namespace yii\account\assets;

use Yii;
use yii\components\AssetBundle;

class AccountAsset extends AssetBundle {

	public $depends = [
		// 'yii\xui\FontAwesomeAsset',
		'yii\xui\BootstrapFlexAsset',
		'yii\xui\VueAsset',
		// 'yii\xui\VuexAsset',
		// 'yii\xui\AxiosAsset',
		'yii\xui\ModuleAsset',
	];

}
