<?php
namespace yii\account\assets;

use Yii;
use yii\components\AssetBundle;

class AccountAsset extends AssetBundle {

	public $depends = [
		'yii\xui\BootstrapAsset',
		'yii\xui\ModuleAsset',
	];

}
