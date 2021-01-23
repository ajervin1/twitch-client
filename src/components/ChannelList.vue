<template>
	<ul class="list-group channel-list">
		<li class="list-group-item d-flex justify-content-between align-items-center"
		    v-for="channel in channels">
			<div>
				{{ channel.name }}
			</div>
			<button @click="handleClick(channel)" class="btn btn-primary btn-sm">
				View Clips
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
