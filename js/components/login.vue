<template lang="pug">
form.login(@submit="submit($event)")
	slot
	.form-group
		input.form-control(
			type="text",
			:name="username.name",
			:placeholder="username.label",
			:autofocus="username.error || !error",
			ref="username",
			v-model="usernameValue",
		)
	.form-group
		input.form-control(
			type="password",
			:name="password.name",
			:placeholder="password.label",
			:autofocus="password.error",
			ref="password",
			v-model="passwordValue",
		)
	transition(name="message")
		.form-group.message(v-if="message") {{message}}
	button.btn.btn-primary.btn-block {{submitText}}
</template>

<script>
export default {
	name: 'login',

	props: {
		error: String,
		password: {
			type: Object,
			required: true,
		},
		submitText: {
			type: String,
			default: '登录',
		},
		username: {
			type: Object,
			required: true,
		},
		duration: {
			type: Number,
			default: 2000,
		},
	},

	data() {
		return {
			usernameValue: this.username.value,
			passwordValue: this.password.value,
			message: this.error,
		};
	},

	mounted() {
		this.message && this.hideMessage();
	},

	watch: {
		message(_message) {
			_message && this.hideMessage();
		},
	},

	methods: {
		submit(e) {
			let error;

			if(!this.usernameValue) {
				error = this.username.hint;
				this.$refs.username.focus();
			} else if(!this.passwordValue) {
				error = this.password.hint;
				this.$refs.password.focus();
			}

			if(error) {
				this.message = error;
				e.preventDefault();
			}
		},
		hideMessage() {
			setTimeout(() => {
				this.message = '';
			}, this.duration);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.login {

	.message {
		margin-bottom: 0;
		overflow: hidden;
		font-size: .75rem;
		height: 2rem;
		color: $color-danger;

		&-enter-active,
		&-leave-active {
			transition: height .2s ease-out;
		}

		&-enter,
		&-leave-active {
			height: 0;
		}
	}
}
</style>
