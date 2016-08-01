<?php
/*!
 * yii2 extension - account - module
 * xiewulong <xiewulong@vip.qq.com>
 * https://github.com/xiewulong/yii2-account
 * https://raw.githubusercontent.com/xiewulong/yii2-account/master/LICENSE
 * create: 2016/7/27
 * update: 2016/7/29
 * version: 0.0.1
 */

namespace yii\account;

use Yii;
use yii\base\ErrorException;

class Module extends \yii\base\Module {

	public $defaultRoute = 'user';

	public $layout = 'main';

	public $author = 'xiewulong<xiewulong@vip.qq.com>';

	public $keywords = 'yii2, xiewulong, account, user, login, signin, signup, password, reset';

	public $description = 'yii2 account management module';

	public $messageCategory = 'account';

	public $permissions = ['@'];

	public function init() {
		parent::init();

		$this->registerTranslations();
	}

	public function registerTranslations() {
		$i18n = \Yii::$app->i18n;
		if(!isset($i18n->translations[$this->messageCategory]) && !isset($i18n->translations[$this->messageCategory])) {
			$i18n->translations[$this->messageCategory] = [
				'class' => 'yii\i18n\PhpMessageSource',
				'basePath' => __DIR__ . '/messages',
				'sourceLanguage' => \Yii::$app->sourceLanguage,
			];
		}
	}

}
