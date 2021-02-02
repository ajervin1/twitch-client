<template>
	<section class="">
		
		<!--Clip-->
		<div class="embed-responsive embed-responsive-21by9">
			<iframe :src="clip.embed_url + '&parent=twitchy.netlify.app'"></iframe>
		</div>
		<!--Clip-->
		<!--Clip Details-->
		<div class="clip-details d-flex justify-content-between bg-light p-4 align-items-center">
			<div class="left">
				<h2 class="text-primary">{{ clip.broadcaster.display_name }}</h2>
				<div class="avatar avatar-lg mb-2">
					<img :src="clip.broadcaster.logo" class="rounded-circle">
				</div>
				<h3>{{ clip.game }}</h3>
			
			
			</div>
			<div class="right">
				<h4><strong>Title: </strong>{{ clip.title }}</h4>
				<div class=""><strong>Views: </strong>{{ clip.views }}</div>
			</div>
		</div>
		<!--Clip Details-->
	
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
		created () {
			this.clip = this.$store.state.clips.find(clip => clip.tracking_id == this.$route.params.id)
		}
	}
</script>
