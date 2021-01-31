<template>
	<div class="likes-container row justify-content-center">
		<ul class="list-group col-8">
			<li class="list-group-item mb-4 rounded" v-for="clip in clips">
				<article class="media">
					<img :src="clip.thumbnails.medium" width="300px">
					<div class="media-body pl-4">
						<div class="d-flex justify-content-between">
							<h4 class="font-weight-bold">{{ clip.game }}</h4>
							<small><strong>Views: </strong>{{ clip.views }}</small>
						</div>
					
						<h5 class=" text-primary">{{ clip.title }}</h5>
						<h5>{{ clip.broadcaster.display_name }}</h5>
						
						<div class="avatar">
							<img :src="clip.broadcaster.logo" class="rounded-circle">
						</div>
						
						<div class="mt-2">
							<router-link :to="`/clips/${clip.tracking_id}`"
							             class="btn btn-primary btn-sm">
								View Clip
							</router-link>
						</div>
				
					
					</div>
				</article>
			</li>
		</ul>
	</div>
</template>

<script>
	import { db } from '../../db'
	
	export default {
		name: 'LikesList',
		data () {
			return {
				// Liked Clips
				clips: []
			}
		},
		async created () {
			const user = this.$store.state.user
			console.log(user)
			const qs = await db.collection('users')
				.doc(user.uid)
				.collection('likes')
				.get()
			
			this.clips = qs.docs.map(doc => {
				const clip = doc.data()
				clip.id = doc.id
				return clip
			})
		}
	}
</script>
