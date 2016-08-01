<?php
use yii\helpers\Html;

$this->title = \Yii::t('account', 'Login');
?>

<div class="container">
	<?= Html::beginForm(null, 'post', [
		'class' => 'col-md-4 col-md-push-4 account-form',
	]) ?>
		<h1 class="text-center"><?= Html::encode($this->title) ?></h1>
		<div class="form-group">
			<?= Html::activeTextInput($model, 'username', [
				'class' => 'form-control',
				'placeholder' => $model->getAttributeHint('username'),
				'autofocus' => $model->isFirstErrorAttribute('username') || !$model->hasErrors(),
			]) ?>
			<?= Html::label(null, Html::getInputId($model, 'username'), [
				'class' => 'glyphicon glyphicon-user',
			]) ?>
		</div>
		<div class="form-group">
			<?= Html::activePasswordInput($model, 'password', [
				'class' => 'form-control',
				'placeholder' => $model->getAttributeHint('password'),
				'autofocus' => $model->isFirstErrorAttribute('password'),
			]) ?>
			<?= Html::label(null, Html::getInputId($model, 'password'), [
				'class' => 'glyphicon glyphicon-lock',
			]) ?>
		</div>
		<div class="form-group">
			<?= Html::submitButton(\Yii::t('account', 'Login'), [
				'class' => 'btn btn-primary btn-lg btn-block',
			]) ?>
		</div>
	<?= Html::endForm() ?>
</div>
