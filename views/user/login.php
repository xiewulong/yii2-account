<?php
use yii\helpers\Html;

$this->title = \Yii::t('account', 'login');
?>

<img is="logo" src="https://assets-cdn.shimo.im/assets/images/logo_account_2x-d8d16c04f8.png" />

<h1>标题</h1>

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

<!-- <button is="cButton" type="submit" :autofocus="true" color="primary" icon="fa" data-aaa="bbb">确定</button>
<button is="c-button" :disabled="true">取消</button>

{{message}}
<p v-bind:title="message"></p>
<p v-if="seen">seen</p>
<ol>
	<li v-for="todo in todos">{{todo.text}}</li>
</ol>
<button v-on:click="reverseMessage">点击</button>
<input type="text" v-model="message" />
<div v-html="htmldemo">html</div>

<input
	type="text"
	v-model="todoText"
	v-on:keyup.enter="addNewTodoItem"
	placeholder="Enter a item name"
/>
<ol>
	<li
		is="todo-item"
		v-for="(todo, index) in todos"
		v-bind:title="todo.text"
		v-on:remove="todos.splice(index, 1)"
	></li>
</ol> -->

<?= $this->registerJs('new App({});', 3); ?>
