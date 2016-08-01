<?php

use yii\db\Migration;

class m160731_032036_account_init extends Migration {

	public $messageCategory ='account';

	public function init() {
		parent::init();

		$this->registerTranslations();
	}

	public function registerTranslations() {
		$i18n = \Yii::$app->i18n;
		if(!isset($i18n->translations[$this->messageCategory]) && !isset($i18n->translations[$this->messageCategory])) {
			$i18n->translations[$this->messageCategory] = [
				'class' => 'yii\i18n\PhpMessageSource',
				'basePath' => dirname(__DIR__) . '/messages',
				'sourceLanguage' => \Yii::$app->sourceLanguage,
			];
		}
	}

	public function safeUp() {
		$tableOptions = null;
		if($this->db->driverName === 'mysql') {
			$tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
		}

		$this->createTable('{{%user}}', [
			'id' => $this->primaryKey()->comment(\Yii::t($this->messageCategory, 'User id')),
			'username' => $this->string(50)->unique()->comment(\Yii::t($this->messageCategory, 'Username')),
			'email' => $this->string(50)->unique()->comment(\Yii::t($this->messageCategory, 'Email')),
			'mobile' => $this->string(50)->unique()->comment(\Yii::t($this->messageCategory, 'Mobile')),
			'password_hash' => $this->string()->comment(\Yii::t($this->messageCategory, 'Password hash')),
			'auth_key' => $this->string(32)->comment(\Yii::t($this->messageCategory, 'Authentication key')),
			'status' => $this->smallInteger()->notNull()->defaultValue(10)->comment(\Yii::t($this->messageCategory, 'User status'));
			'created_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'Created time')),
			'updated_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'Updated time')),
		], $tableOptions);
	}

	public function safeDown() {
		$this->dropTable('{{%user}}');
	}

}
