<?php
use yii\helpers\Html;

$this->title = \Yii::t('account', 'login');
?>

<div class="container">
	<?= Html::beginForm(null, 'post', [
		'class' => 'col-md-4 col-md-push-4 account-form',
	]) ?>
		<h1 class="text-center"><?= Html::encode($this->title) ?></h1>
		<div class="form-group">
			<?= Html::activeTextInput($user, 'username', [
				'class' => 'form-control',
				'placeholder' => $user->getAttributeHint('username'),
				'autofocus' => $user->isFirstErrorAttribute('username') || !$user->hasErrors(),
			]) ?>
			<?= Html::label(null, Html::getInputId($user, 'username'), [
				'class' => 'glyphicon glyphicon-user',
			]) ?>
		</div>
		<div class="form-group">
			<?= Html::activePasswordInput($user, 'password', [
				'class' => 'form-control',
				'placeholder' => $user->getAttributeHint('password'),
				'autofocus' => $user->isFirstErrorAttribute('password'),
			]) ?>
			<?= Html::label(null, Html::getInputId($user, 'password'), [
				'class' => 'glyphicon glyphicon-lock',
			]) ?>
		</div>
		<div class="form-group">
			<?= Html::submitButton(\Yii::t('account', 'login'), [
				'class' => 'btn btn-primary btn-lg btn-block',
			]) ?>
		</div>
	<?= Html::endForm() ?>
</div>
