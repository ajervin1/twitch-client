<template>
	<div class="row mt-24">
		<div class="col-4 mb-6" v-for="clip in clips">
			<ClipItem :clip="clip"/>
		</div>
	</div>
</template>

<script>
	import ClipItem from './ClipItem'
	
	export default {
		name: 'ClipsList',
		components: { ClipItem },
		computed: {
			clips () {
				return this.$store.state.clips
			}
		}
	}
</script>
