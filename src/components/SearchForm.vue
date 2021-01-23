<template>
	<div class="w-25 form-container">
		
		<form class="d-flex align-items-center">
		
			<input @input="handleInput" type="search" placeholder="Search Channels" v-model='term' class="form-control rounded-right-0"/>
			<div class="input-group-append bg-secondary p-3 px-4 rounded-right">
				<i class="fa fa-search"></i>
			</div>
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
			async handleInput () {
				await this.$store.dispatch('searchChannels', this.term);
				
				setTimeout(() => {
					this.$store.state.channels = []
					this.term = ''
				}, 9000)
			}
		}
	}
</script>
<style>
	
	/* Inline #2 | http://localhost:8080/?# */
	
	.w-25.form-container.mb-4 {
		position: relative;
	}
	
	.list-group.channel-list {
		position: absolute;
		z-index: 2;
		width: 100%;
	}

</style>
