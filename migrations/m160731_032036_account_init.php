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
			'username' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'Username')),
			'email' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'Email')),
			'mobile' => $this->string(68)->unique()->comment(\Yii::t($this->messageCategory, 'Mobile')),
			'password_hash' => $this->string()->comment(\Yii::t($this->messageCategory, 'Password hash')),
			'auth_key' => $this->string(68)->comment(\Yii::t($this->messageCategory, 'Authentication key')),
			'status' => $this->smallInteger()->notNull()->defaultValue(1)->comment(\Yii::t($this->messageCategory, 'Status')),
			'created_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'Created time')),
			'updated_at' => $this->integer()->notNull()->comment(\Yii::t($this->messageCategory, 'Updated time')),
		], $tableOptions);
		$this->createIndex('status', '{{%user}}', 'status');
		$this->addCommentOnTable('{{%user}}', \Yii::t($this->messageCategory, 'User'));

		if(YII_ENV == 'prod') return;

		$time = time();
		$this->batchInsert('{{%user}}', [
			'username',
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
