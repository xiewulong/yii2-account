<template lang="pug">
.tab-page(v-if="tabs")
	.tabs
		.row
			.col-xs(
				v-for="(name, id) in tabs",
			)
				a(
					:class="{active: id == activeId}",
					@click="switcher(id)",
				) {{name}}
	.page(
		:class="id",
		v-for="(name, id) in tabs",
		v-if="id == activeId",
	)
		slot(:name="id")
</template>

<script>
export default {
	name: 'account-login',

	props: {
		active: String,
		tabs: Object,
	},

	data() {
		let active = this.active;
		if(!active) {
			let id;
			for(id in this.tabs) {
				active = id;
				break;
			}
		}

		return {
			activeId: active,
		};
	},

	methods: {
		switcher(id) {
			this.activeId = id;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../scss/config';

.tab-page {

	.tabs {
		border-bottom: 1px solid $gray-light;
		margin-bottom: 1rem;
		height: 50px;
		text-align: center;

		@media (min-width: 544px) {
			margin-bottom: 3rem;
		}

		a {
			color: $gray;
			display: inline-block;
			cursor: pointer;
			height: 50px;
			line-height: 48px;
			border-bottom: 2px solid transparent;
			overflow: hidden;
			transition: all .2s ease-out;
			font-size: .875rem;

			@media (min-width: 544px) {
				font-size: 1rem;
			}

			&.active {
				cursor: default;
			}

			&:hover,
			&.active {
				border-bottom-color: $asphalt;
				color: $asphalt;
			}
		}
	}
}
</style>
