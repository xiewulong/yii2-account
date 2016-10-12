<?php
use yii\components\Migration;

class m160731_032036_account_init extends Migration {

	public $messageCategory ='account';

	public function init() {
		$this->messagesPath = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'messages';

		parent::init();
	}

	public function safeUp() {
		$tableOptions = null;
		if($this->db->driverName === 'mysql') {
			$tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
		}

		$this->createTable('{{%user}}', [
			'id' => $this->primaryKey()->comment(\Yii::t($this->messageCategory, 'Id')),
			'name' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'name')),
			'email' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'email')),
			'mobile' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'mobile')),
			'password_hash' => $this->string()->comment(\Yii::t($this->messageCategory, 'password hash')),
			'auth_key' => $this->string(68)->comment(\Yii::t($this->messageCategory, 'authentication key')),
			'status' => $this->boolean()->notNull()->defaultValue(1)->comment(\Yii::t($this->messageCategory, 'status')),
			'created_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'created time')),
			'updated_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'updated time')),
		], $tableOptions);
		$this->createIndex('status', '{{%user}}', 'status');
		$this->addCommentOnTable('{{%user}}', \Yii::t($this->messageCategory, 'user'));

		if(YII_ENV == 'prod') return;

		$time = time();
		$this->batchInsert('{{%user}}', [
			'name',
			'email',
			'mobile',
			'password_hash',
			'auth_key',
			'created_at',
			'updated_at',
		], [
			[
				'test',
				'test0@domain.com',
				'12345678900',
				\Yii::$app->security->generatePasswordHash('test'),
				\Yii::$app->security->generateRandomString(),
				$time,
				$time,
			],
		]);
	}

	public function safeDown() {
		$this->dropTable('{{%user}}');
	}

}
