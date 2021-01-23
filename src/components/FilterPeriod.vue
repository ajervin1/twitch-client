<template>
	<div class="dropdown">
		<button class="btn btn-secondary" data-toggle="dropdown">
			Sort Time
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#" @click="handleClick(filter)"
			   v-for="filter in filters">
				{{ filter }}
			</a>
		</div>
		<span class="ml-4 badge badge-primary">
			{{ period }}
		</span>
	</div>
</template>

<script>
	export default {
		name: 'FilterPeriod',
		data () {
			return {
				filters: [ 'day', 'week', 'month', 'all' ]
			}
		},
		computed: {
			period () {
				return this.$store.state.period
			}
		},
		methods: {
			async handleClick (filter) {
				await this.$store.dispatch('changePeriod', filter)
			}
		}
	}
</script>
