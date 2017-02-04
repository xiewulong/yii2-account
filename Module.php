<?php
/*!
 * yii2 - module - account
 * xiewulong <xiewulong@vip.qq.com>
 * https://github.com/xiewulong/yii2-account
 * https://raw.githubusercontent.com/xiewulong/yii2-account/master/LICENSE
 * create: 2016/07/27
 * update: 2017/01/24
 * since: 0.0.1
 */

namespace yii\account;

use Yii;

class Module extends \yii\components\Module {

	public $defaultRoute = 'sign';

	public $messageCategory = 'account';

	public $permissions = ['@'];

	public $identityClass = 'yii\account\models\User';

	public $layout = 'account';

	public $author = 'xiewulong<xiewulong@vip.qq.com>';

	public $keywords = 'yii2, xiewulong, account, user, login, signin, signup, password, reset';

	public $description = 'yii2 account management module';

	public $title;

	public $logo;

	public $wechatAccountEnabled = false;

	public $wechatComponent = 'wechat';

	public $wechat;

	public function init() {
		parent::init();

		if($this->wechatAccountEnabled) {
			$this->wechat = \Yii::createObject(\Yii::$app->components[$this->wechatComponent]);
		}
	}

}
