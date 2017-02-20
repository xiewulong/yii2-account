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

<?php if($_user) { ?>
<?= Html::tag('div', null, [
	'is' => 'pair',
	':_user' => $_user,
]) ?>
<? } ?>

<div is="tab-page" :tabs="{login: '<?= $_user ? "绑定已有账户" : $this->title ?>'<?php if($_user) { ?>, signup: '自动生成账户'<? } ?>}">

	<?php if($_user) { ?>
	<?= Html::beginForm(['up'], 'post', [
		'slot' => 'signup',
		'is' => 'signup',
		':_user' => $_user,
	]) ?>
	<?= Html::endForm() ?>
	<? } ?>

	<?= Html::beginForm(null, 'post', [
		'slot' => "login",
		'is' => 'login',
		':username' => $user->getAttributeForVue('username'),
		':password' => $user->getAttributeForVue('password'),
		'error' => $user->firstErrorInFirstErrors,
		'submitText' => \Yii::t('account', 'login'),
	]) ?>
	<?= Html::endForm() ?>

</div>
