<template>
	<main id="app" class="pb-18">
		<router-view />
	</main>
</template>

<script>
	
	
	import SearchForm from './components/SearchForm'
	import ChannelList from './components/ChannelList'
	import FilterPeriod from './components/FilterPeriod'
	import ClipsList from './components/ClipsList'
	
	export default {
		name: 'App',
		components: { ClipsList, FilterPeriod, ChannelList, SearchForm },
		computed: {
			state () {
				return this.$store.state
			}
		}
		
	}
</script>


