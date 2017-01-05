<template lang="pug">
div.logo
	img(
		:src="src"
	)
</template>

<style lang="scss" scoped>
@import '../../scss/config';

</style>

<script>
export default {
	name: 'logo',

	props: {
		src: {
			type: String,
			required: true,
		},
	},
};
</script>
