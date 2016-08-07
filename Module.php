<?php
/*!
 * yii2 - module - account
 * xiewulong <xiewulong@vip.qq.com>
 * https://github.com/xiewulong/yii2-account
 * https://raw.githubusercontent.com/xiewulong/yii2-account/master/LICENSE
 * create: 2016/7/27
 * update: 2016/8/8
 * since: 0.0.1
 */

namespace yii\account;

use Yii;

class Module extends \yii\components\Module {

	public $layout = 'account';

	public $defaultRoute = 'user';

	public $permissions = ['@'];

	public $author = 'xiewulong<xiewulong@vip.qq.com>';

	public $keywords = 'yii2, xiewulong, account, user, login, signin, signup, password, reset';

	public $description = 'yii2 account management module';

	public $messageCategory = 'account';

}
