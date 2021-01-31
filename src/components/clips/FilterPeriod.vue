<template>
	<div class="dropdown mb-6">
		<button class="btn btn-primary" data-toggle="dropdown">
			Filter Time
		</button>
		<div class="dropdown-menu">
			<a class="dropdown-item" href="#" @click="handleClick(filter)"
			   v-for="filter in filters">
				{{ filter }}
			</a>
		</div>
		<span class="ml-4 badge badge-success">
			Top Clips This - {{ period }}
		</span>
	</div>
</template>

<script>
	/*
		Changes Period Which Also Alters The Clips
	* */
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
