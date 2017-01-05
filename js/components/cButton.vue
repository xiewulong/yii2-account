<template lang="pug">
button.btn(
	:class="[`btn-${color}`, size ? `btn-${size}` : '', {'btn-block': block}]",
	@click="$emit('click', e)",
)
	i.fa(
		:class="`fa-${icon}`",
		v-if="icon",
	)
	slot
</template>

<style lang="scss" scoped>
@import '../../scss/config';
</style>

<script>
export default {
	name: 'cButton',

	props: {
		block: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'default',
		},
		icon: String,
		size: String,
	},
};
</script>
