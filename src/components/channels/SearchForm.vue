<template>
	<div class="w-25 form-container search-container">
		<form class="d-flex align-items-center">
			<input @input.self="handleInput" type="search" placeholder="Search Channels"
			       v-model='term'
			       class="form-control rounded"/>
		</form>
		<ChannelList/>
	</div>
</template>

<script>
	import ChannelList from './ChannelList'
	
	export default {
		name: 'SearchForm',
		components: { ChannelList },
		data () {
			return {
				term: ''
			}
		},
		methods: {
			async handleInput (e) {
				console.log("search channels")
				if (this.term !== ''){
					await this.$store.dispatch('searchChannels', this.term)
				}
				setTimeout(() => {
					this.$store.state.channels = []
					this.term = ''
				}, 8000)
			}
		}
	}
</script>
<style>
	
	/* Inline #2 | http://localhost:8080/?# */
	
	
	.search-container {
		position: relative;
	}
	
	.list-group.channel-list {
		position: absolute;
		z-index: 2;
		right: 0;
		left: 0;
		
	}

</style>
