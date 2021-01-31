<template>
	<ul class="list-group channel-list">
		<li class="channel-item list-group-item d-flex justify-content-between align-items-center"
		    v-for="channel in channels">
			<div>
				{{ channel.display_name }}
			</div>
			<button @click="handleClick(channel)" class="btn font-size-xs btn-primary btn-sm">
				<small>View Clips</small>
			</button>
		</li>
	</ul>
</template>

<script>
	export default {
		name: 'ChannelList',
		computed: {
			channels () {
				return this.$store.state.channels
			}
		},
		methods: {
			// Changes The Channels Clips
			async handleClick (channel) {
				await this.$store.dispatch('changeChannel', channel)
				this.$store.commit('setChannels', [])
			}
		}
	}
</script>
<style>

</style>
