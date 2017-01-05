<template lang="pug">
.account
	.account-body
		slot
</template>

<style lang="scss" scoped>
@import '../../scss/config';

.account {
	padding-top: 80px;
}

</style>

<script>
export default {
	name: 'account',

	props: {

	},
};
</script>
