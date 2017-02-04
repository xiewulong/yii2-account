<template lang="pug">
.pair.row
	.col-xs
		b
			img(:src="_user.face")
		p {{_user.name}}
	.col-xs(v-if="user")
		b
			img(:src="user.face")
		p {{user.username}}
	.col-xs.guest(v-else)
		p(v-for="text in guest") {{text}}
</template>

<script>
export default {
	name: 'pair',

	props: {
		_user: {
			type: Object,
			required: true,
		},
		guest: {
			type: Array,
			default() {
				return [
					'您尚未登录',
					'请先绑定账户',
				];
			},
		},
		user: {
			type: Object,
			default() {
				return null;
			},
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.pair {
	font-size: .75rem;
	padding-bottom: 1rem;
	display: flex;

	.col-xs {
		flex: 1;
	}

	b {
		display: block;
		width: 50%;
		padding-bottom: 50%;
		border-radius: 50%;
		margin: 0 auto;
		position: relative;
		overflow: hidden;

		img {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	p {
		margin: 5px 0 0;
	}

	.guest {
		color: $color-primary;
		padding-top: 2rem;
	}
}
</style>
