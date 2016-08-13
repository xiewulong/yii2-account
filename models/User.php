<?php
namespace yii\account\models;

use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\components\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * User model
 *
 * @since 0.0.1
 * @property {integer} $id
 * @property {string} $username
 * @property {string} $email
 * @property {string} $mobile
 * @property {string} $password_hash
 * @property {string} $auth_key
 * @property {integer} $status
 * @property {integer} $created_at
 * @property {integer} $updated_at
 *
 * @property {string} $password
 * @property {string} $password_repeat
 * @property {string} $password_old
 * @property {boolean} $remember_me
 * @property {integer} $remember_period
 */
class User extends ActiveRecord implements IdentityInterface {

	const STATUS_DELETED = 0;
	const STATUS_INACTIVE = 1;
	const STATUS_ACTIVE = 2;

	public $password;

	public $password_repeat;

	public $password_old;

	public $remember_me = true;

	public $remember_period = 60 * 60 * 24 * 30;

	public $messageCategory = 'account';

	/**
	 * @inheritdoc
	 */
	public static function tableName() {
		return '{{%user}}';
	}

	/**
	 * @inheritdoc
	 */
	public function behaviors() {
		return [
			TimestampBehavior::className(),
		];
	}

	/**
	 * @inheritdoc
	 */
	public function rules() {
		return [
			[['username', 'password', 'password_repeat', 'password_old'], 'required'],

			['username', 'string', 'min' => 6, 'max' => 16, 'on' => 'signup'],
			['username', 'match', 'pattern' => '/^[a-z]\w{5, 15}$/i', 'on' => 'signup'],

			['status', 'default', 'value' => self::STATUS_ACTIVE],
			['status', 'in', 'range' => [
				self::STATUS_INACTIVE,
				self::STATUS_ACTIVE,
			]],

			['password', 'string', 'min' => 6, 'max' => 16, 'on' => ['password-reset']],
			['password', 'compare', 'on' => ['password-reset']],

			['remember_me', 'boolean'],

			// Query data needed
			[['username', 'email', 'mobile'], 'unique', 'on' => 'signup'],
		];
	}

	/**
	 * @inheritdoc
	 */
	public function scenarios() {
		$scenarios = parent::scenarios();
		$scenarios['login'] = ['username', 'password', 'remember_me'];
		$scenarios['password-reset'] = ['password', 'password_repeat', 'password_old'];

		return $scenarios;
	}

	/**
	 * @inheritdoc
	 */
	public function attributeLabels() {
		return [
			'id' => \Yii::t($this->messageCategory, 'Id'),
			'username' => \Yii::t($this->messageCategory, 'Username'),
			'email' => \Yii::t($this->messageCategory, 'Email'),
			'mobile' => \Yii::t($this->messageCategory, 'Mobile'),
			'status' => \Yii::t($this->messageCategory, 'Status'),

			'password' => \Yii::t($this->messageCategory, 'Password'),
			'password_repeat' => \Yii::t($this->messageCategory, 'Password repeat'),
			'password_old' => \Yii::t($this->messageCategory, 'Old password'),
			'remember_me' => \Yii::t($this->messageCategory, 'Remember me'),
			'remember_period' => \Yii::t($this->messageCategory, 'Remember period'),
		];
	}

	/**
	 * @inheritdoc
	 */
	public function attributeHints() {
		return [
			'id' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Id'),
			]),
			'username' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Username'),
			]),
			'email' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Email'),
			]),
			'mobile' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Mobile'),
			]),
			'status' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'choose'),
				'attribute' => \Yii::t($this->messageCategory, 'Status'),
			]),

			'password' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Password'),
			]),
			'password_repeat' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'repeat'),
				'attribute' => \Yii::t($this->messageCategory, 'Password'),
			]),
			'password_old' => \Yii::t($this->messageCategory, 'Please {action} {attribute}', [
				'action' => \Yii::t($this->messageCategory, 'enter'),
				'attribute' => \Yii::t($this->messageCategory, 'Old password'),
			]),
		];
	}

	/**
	 * Return status items in every scenario
	 *
	 * @since 0.0.1
	 * @return {array}
	 */
	public function statusItems() {
		return [
			self::STATUS_ACTIVE => \Yii::t($this->messageCategory, 'Active'),
			self::STATUS_INACTIVE => \Yii::t($this->messageCategory, 'Inactive'),
			self::STATUS_DELETED => \Yii::t($this->messageCategory, 'Deleted'),
		];
	}

	/**
	 * Reset user password
	 *
	 * @since 0.0.1
	 * @return {boolean}
	 */
	public function runPasswordReset() {
		if(!$this->validate()) {
			return false;
		}

		if(!$this->validatePassword($this->password_old)) {
			$this->addError('password_old', \Yii::t($this->messageCategory, 'Incorrect password'));
			return false;
		}
		if($this->validatePassword($this->password)) {
			$this->addError('password', \Yii::t($this->messageCategory, 'New password can not be same as old password'));
			return false;
		}

		$this->setPassword($this->password);
		return $this->save(false);
	}

	/**
	 * Logs in a user using the provided username and password
	 *
	 * @since 0.0.1
	 * @return {boolean}
	 */
	public function runLogin() {
		if(!$this->validate()) {
			return false;
		}

		$user = static::findByUsername($this->username);
		if(!$user || !$user->validatePassword($this->password)) {
			$this->addError('password', \Yii::t($this->messageCategory, 'Incorrect username or password'));
			return false;
		}

		return \Yii::$app->user->login($user, $this->remember_me ? $this->remember_period : 0);
	}

	/**
	 * Find user by username
	 *
	 * @since 0.0.1
	 * @return {boolean}
	 */
	public static function findByUsername($username) {
		return static::findOne(['username' => $username, 'status' => static::STATUS_ACTIVE]);
	}

	/**
	 * Validates password
	 *
	 * @since 0.0.1
	 * @param {string} $password
	 * @return {boolean}
	 */
	public function validatePassword($password) {
		return \Yii::$app->security->validatePassword($password, $this->password_hash);
	}

	/**
	 * Generates password hash from password and sets it to the model
	 *
	 * @since 0.0.1
	 * @param {string} $password
	 */
	public function setPassword($password) {
		$this->password_hash = \Yii::$app->security->generatePasswordHash($password);
	}

	/**
	 * Generates "remember me" authentication key
	 */
	public function generateAuthKey() {
		$this->auth_key = \Yii::$app->security->generateRandomString();
	}

	/**
	 * @inheritdoc
	 */
	public static function findIdentity($id) {
		return static::findOne(['id' => $id, 'status' => static::STATUS_ACTIVE]);
	}

	/**
	 * @inheritdoc
	 */
	public static function findIdentityByAccessToken($token, $type = null) {
		throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
		return static::findOne(['access_token' => $token, 'status' => static::STATUS_ACTIVE]);
	}

	/**
	 * @inheritdoc
	 */
	public function getId() {
		return $this->getPrimaryKey();
	}

	/**
	 * @inheritdoc
	 */
	public function getAuthKey() {
		return $this->auth_key;
	}

	/**
	 * @inheritdoc
	 */
	public function validateAuthKey($authKey) {
		return $this->getAuthKey() == $authKey;
	}

}
