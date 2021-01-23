<template>
	<section class="">
		<h2>Show Page</h2>
		<div class="embed-responsive embed-responsive-21by9">
			<iframe :src="clip.embed_url + '&parent=localhost'" ></iframe>
		</div>
	
	</section>
</template>

<script>
	export default {
		name: 'ShowPage',
		data () {
			return {
				clip: null
			}
		},
		watch: {
			$route (to, from) {
				console.log(to)
				console.log(from)
			}
		},
		beforeRouteUpdate: (to, from, next) => {
			console.log(to)
			next()
		},
		created () {
			this.clip = this.$store.state.clips.find(clip => clip.tracking_id == this.$route.params.id)
		}
	}
</script>
