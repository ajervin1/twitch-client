<template>
	<main>
		<!--Search Form Channel List-->
		<SearchForm/>
		<!--Filter Period-->
		<FilterPeriod class="mt-4"/>
	
		<!--Clips List-->
		<ClipsList/>
		<!--Load More-->
		<div class="mt-6">
			<button class="btn btn-success d-block w-75 mx-auto" @click="handleClick">
				Load More
			</button>
		</div>
	</main>
</template>

<script>
	import SearchForm from '../components/SearchForm'
	import ClipsList from '../components/ClipsList'
	import FilterPeriod from '../components/FilterPeriod'
	
	export default {
		name: 'HomePage',
		components: { FilterPeriod, ClipsList, SearchForm },
		methods: {
			async handleClick () {
				await this.$store.dispatch('getTopClips')
			}
		}
	}
</script>
