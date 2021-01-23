import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'

const http = axios.create({
	baseURL: 'https://api.twitch.tv/kraken',
	headers: {
		Accept: 'application/vnd.twitchtv.v5+json',
		'Client-ID': 'mfytj1f03ko0k4uloqw0tgiusjkjqq'
	},
	params: {
		limit: 3,
	}
})


const store = new Vuex.Store({
	state: {
		// Filters
		channelname: null,
		period: 'week',
		cursor: null,
		// Clips
		clips: [],
		// Channels
		channels: []
	},
	mutations: {
		setClips (state, clips) {
			state.clips = clips
		},
		setChannels (state, channels) {
			state.channels = channels
		},
		setChannel (state, channel) {
			state.channelname = channel.name
		},
		// When I Change Periods Make Another Api Call
		setPeriod (state, period) {
			state.period = period
		}
	},
	actions: {
		// Gets Top Clips
		async getTopClips (context, payload) {
			const { data } = await http.get('/clips/top', {
				params: {
					channel: context.state.channelname,
					period: context.state.period,
					cursor: context.state.cursor,
					limit: 3,
				}
			})
			const { clips, _cursor } = data
			context.state.cursor = _cursor
			for (const clip of clips) {
				store.state.clips.push(clip)
			}
		},
		// Search Channels
		async searchChannels (context, term) {
			const { data: { channels } } = await http.get('/search/channels', {
				params: {
					query: term,
					limit: 3
				}
			})
			context.commit('setChannels', channels)
		},
		// Change Period
		async changePeriod (context, period) {
			context.commit('setPeriod', period);
			store.state.clips = [];
			store.state.cursor = null;
			await context.dispatch('getTopClips')
		},
		async changeChannel (context, channel) {
			context.commit('setChannel', channel)
			await context.dispatch('getTopClips')
		}
	},
})

async function run () {
	await store.dispatch('getTopClips')
	
}

run()
export default store



