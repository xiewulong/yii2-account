<?php
namespace yii\account\models;

use Yii;
use yii\base\Model;

class UserForm extends Model {

    public $username;

    public $password;

    public $rememberMe = true;

    private $_user;

    public function rules() {
        return [
            [['username', 'password'], 'required'],
            ['rememberMe', 'boolean'],
            ['password', 'validatePassword'],
        ];
    }

    public function scenarios() {
        return [
            [],
        ];
    }

    public function attributeLabels() {
        return [
            'username' => 'Username',
            'password' => 'Password',
            'rememberMe' => 'Remember Me',
        ];
    }

    public function attributeHints() {
        return [
            'username' => 'Please enter your username',
            'password' => 'Please enter your password',
            'rememberMe' => 'Please choose is remember me',
        ];
    }

    /**
     * Validates the password
     * @method validatePassword
     * @param {string} $attribute the attribute currently being validated
     * @param {array} $params the additional name-value pairs given in the rule
     * @return {boolean}
     * @example $this->validatePassword();
     */
    public function validatePassword($attribute, $params) {
        if(!$this->hasErrors()) {
            $user = $this->getUser();
            if(!$user || !$user->validatePassword($this->password)) {
                $this->addError($attribute, 'Incorrect username or password.');
            }
        }
    }

    /**
     * Logs in a user using the provided username and password
     * @method login
     * @return {boolean}
     * @example $this->login();
     */
    public function login() {
        if($this->validate()) {
            return \Yii::$app->user->login($this->getUser(), $this->rememberMe ? 3600 * 24 * 30 : 0);
        } else {
            return false;
        }
    }

    /**
     * Finds user by [[username]]
     * @method getUser
     * @return {object|null}
     * @example $this->getUser();
     */
    protected function getUser() {
        if($this->_user === null) {
            $this->_user = User::findByUsername($this->username);
        }

        return $this->_user;
    }

}
