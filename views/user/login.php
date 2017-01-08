<?php
use yii\helpers\Html;

$this->title = \Yii::t('account', 'login');
$this->registerJs('new App;', 3);
?>

<div is="account-header">
	<?= Html::tag('h1', \Yii::$app->controller->module->title ? : \Yii::$app->name) ?>
	<?php if(\Yii::$app->controller->module->logo) { ?>
	<?= Html::img(\Yii::$app->controller->module->logo, [
		'slot' => 'logo',
	]) ?>
	<? } ?>
</div>

<div is="tab-page" :tabs="{tab1: '<?= $this->title ?>'}">
	<?= Html::beginForm(null, 'post', [
		'slot' => "tab1",
		'is' => 'account-login',
		':username' => $user->getAttributeForVue('username'),
		':password' => $user->getAttributeForVue('password'),
		'error' => $user->firstErrorInFirstErrors,
		'submitText' => \Yii::t('account', 'login'),
	]) ?>
	<?= Html::endForm() ?>
</div>
