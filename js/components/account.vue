<template lang="pug">
.account
	.account-body
		slot
</template>

<script>
export default {
	name: 'account',

	props: {
		hidden: String,
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.account {
	padding-top: 6rem;
	text-align: center;

	.account-body {
		margin: 0 auto;
		max-width: 17.5rem;

		@media (min-width: 544px) {
			background-color: $white;
			max-width: 30rem;
			padding: 5rem;
			min-height: 40rem;
		}
	}
}
</style>
