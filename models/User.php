<?php
namespace yii\account\models;

use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * User model
 *
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
 * @property {string} $passwordConfirm
 * @property {boolean} [$rememberMe=true]
 * @property {integer} [$rememberPeriod=2592000]
 */
class User extends ActiveRecord implements IdentityInterface {

	const STATUS_DELETED = 0;

	const STATUS_ACTIVE = 10;

	public $password;

	public $password_confirm;

	public $rememberMe = true;

	public $rememberPeriod = 60 * 60 * 24 * 30;

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
	public function scenarios() {
		$scenarios = parent::scenarios();
		$scenarios['login'] = ['username', 'password', 'rememberMe'];

		return $scenarios;
	}

	/**
	 * @inheritdoc
	 */
	public function rules() {
		return [
			[['username', 'password'], 'required'],

			['status', 'default', 'value' => static::STATUS_ACTIVE],
			['status', 'in', 'range' => [static::STATUS_DELETED, static::STATUS_ACTIVE]],

			['rememberMe', 'boolean'],
		];
	}

	/**
	 * @inheritdoc
	 */
	public function attributeLabels() {
		return [
			'id' => \Yii::t($this->messageCategory, 'User id'),
			'username' => \Yii::t($this->messageCategory, 'Username'),
			'email' => \Yii::t($this->messageCategory, 'Email'),
			'mobile' => \Yii::t($this->messageCategory, 'Mobile'),

			'password' => \Yii::t($this->messageCategory, 'Password'),
			'passwordConfirm' => \Yii::t($this->messageCategory, 'Password confirm'),
			'rememberMe' => \Yii::t($this->messageCategory, 'Remember me'),
			'rememberPeriod' => \Yii::t($this->messageCategory, 'Remember period'),
		];
	}

	/**
	 * @inheritdoc
	 */
	public function attributeHints() {
		return [
			'username' => \Yii::t($this->messageCategory, 'Please enter your username'),
			'email' => \Yii::t($this->messageCategory, 'Please enter your email'),
			'mobile' => \Yii::t($this->messageCategory, 'Please enter your mobile'),

			'password' => \Yii::t($this->messageCategory, 'Please enter your password'),
			'passwordConfirm' => \Yii::t($this->messageCategory, 'Please confirm your password'),
		];
	}

	/**
	 * Logs in a user using the provided username and password
	 *
	 * @return {boolean}
	 */
	public function login() {
		if(!$this->validate()) {
			return false;
		}

		$user = static::findByUsername($this->username);
		if(!$user || !$user->validatePassword($this->password)) {
			$this->addError('password', \Yii::t($this->messageCategory, 'Incorrect username or password'));
			return false;
		}

		return \Yii::$app->user->login($user, $this->rememberMe ? $this->rememberPeriod : 0);
	}

	/**
	 * Logs in a user using the provided username and password
	 *
	 * @return {boolean}
	 */
	public function findByUsername($username) {
		return static::findOne(['username' => $username, 'status' => static::STATUS_ACTIVE]);
	}

	/**
	 * Validates password
	 *
	 * @param {string} $password
	 * @return {boolean}
	 */
	public function validatePassword($password) {
		return \Yii::$app->security->validatePassword($password, $this->password_hash);
	}

	/**
	 * Generates password hash from password and sets it to the model
	 *
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
		// return static::findOne(['access_token' => $token]);
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
