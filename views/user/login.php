<?php
use yii\helpers\Html;

$this->title = \Yii::t('account', 'Login');
?>

<div class="account-user-login">
	<h1><?= Html::encode($this->title) ?></h1>
	<?= Html::beginForm(null, 'post') ?>
		<div class="form-group">
			<div class="col-md-4">
				<?= Html::activeLabel($model, 'username') ?>
			</div>
			<div class="col-md-4">
				<?= Html::activeTextInput($model, 'username', ['autofocus' => true]) ?>
			</div>
			<div class="col-md-4">
				<?= Html::activeHint($model, 'username') ?>
				<?= Html::error($model, 'username') ?>
			</div>
		</div>
		<div class="form-group">
			<div class="col-md-4">
				<?= Html::activeLabel($model, 'password') ?>
			</div>
			<div class="col-md-4">
				<?= Html::activePasswordInput($model, 'password') ?>
			</div>
			<div class="col-md-4">
				<?= Html::activeHint($model, 'password') ?>
				<?= Html::error($model, 'password') ?>
			</div>
		</div>
		<div class="form-group">
			<div class="col-md-4">
				<?= Html::activeLabel($model, 'rememberMe') ?>
			</div>
			<div class="col-md-4">
				<?= Html::activeCheckbox($model, 'rememberMe') ?>
			</div>
			<div class="col-md-4">
				<?= Html::activeHint($model, 'rememberMe') ?>
			</div>
		</div>
		<div class="form-group">
			<div class="col-md-4 col-md-push-4">
				<?= Html::submitButton(\Yii::t('account', 'Login'), ['class' => 'btn btn-primary']) ?>
			</div>
		</div>
	<?= Html::endForm() ?>
</div>
