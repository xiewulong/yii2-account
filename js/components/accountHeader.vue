<template lang="pug">
.account-header
	.logo(v-if="$slots.logo")
		slot(name="logo")
	slot
</template>

<script>
export default {
	name: 'account-header',
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.account-header {
	padding-bottom: 1.5rem;

	@media (min-width: 544px) {
		padding-bottom: 3.25rem;
	}

	.logo {
		padding-bottom: 1.25rem;

		img {
			max-width: 100%;
			max-height: 2.5rem;
		}
	}

	h1 {
		font-size: 1.25rem;
		margin-bottom: 0;
	}
}
</style>
