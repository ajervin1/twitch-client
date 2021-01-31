<template>
	<div id="app">
		<!--NavBar-->
		<NavBar class="mb-4"/>
		<router-view />
	</div>
</template>

<script type="javascript">
	
	
	import NavBar from './components/NavBar'
	import ClipsList from './components/clips/ClipsList'
	import LikesList from './components/LikesList'
	import FilterPeriod from './components/clips/FilterPeriod'
	import SearchForm from './components/channels/SearchForm'
	
	export default {
		name: 'App',
		components: { SearchForm, FilterPeriod, LikesList, ClipsList, NavBar },
		computed: {
			state () {
				return this.$store.state
			}
		}
		
	}
</script>


