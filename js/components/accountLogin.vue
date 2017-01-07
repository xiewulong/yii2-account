<template lang="pug">
form.account-login(@submit="submit($event)")
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
	name: 'account-login',

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

	methods: {
		submit: function(e) {
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
		hideMessage: function() {
			setTimeout(() => {
				this.message = '';
			}, this.duration);
		},
	},

	watch: {
		message: function(_message) {
			_message && this.hideMessage();
		},
	},

	mounted: function() {
		this.message && this.hideMessage();
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.account-login {

	.btn,
	.form-control {
		border-radius: 0;
		font-size: .875rem;
	}

	.btn {
		background-color: $asphalt;
		border-color: $asphalt;

		&:hover,
		&:focus {
			background-color: $asphalt-dark;
			border-color: $asphalt-dark;
		}
	}

	.form-control {
		color: $asphalt;
		border-color: $gray-light;

		&:focus {
			border-color: $asphalt;
		}
	}

	.message {
		margin-bottom: 0;
		overflow: hidden;
		font-size: .75rem;
		height: 2rem;

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
