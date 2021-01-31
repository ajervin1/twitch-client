<template>
	<div class="row">
		<div class="col-4 mb-6" v-for="clip in clips">
			<article class="card bg-light">
				<!--Img-->
				<img :src="clip.thumbnails.medium" class="card-img-top">
				<div class="card-body py-2 clip-details">
					<div class="d-flex justify-content-between">
						<h4 class="text-primary">{{ clip.title }}</h4>
						<p class="small font-weight-medium"><strong>Views: </strong>{{ clip.views }}
						</p>
					</div>
					<!--Clip Actions-->
					<div class="clip-actions">
						<button class="btn btn-primary btn-sm py-0 mr-2" @click="handleLike(clip)">
							Like
						</button>
						<router-link :to="`/clips/${clip.tracking_id}`"
						             class="btn btn-success btn-sm py-0">
							View
						</router-link>
					</div>
				</div>
			
			</article>
		</div>
	</div>
</template>

<script>
	import ClipItem from './ClipItem'
	import { db } from '../../../db'
	
	export default {
		name: 'ClipsList',
		components: { ClipItem },
		computed: {
			user () {
				return this.$store.state.user
			},
			clips () {
				return this.$store.state.clips
			}
		},
		methods: {
			// Add To Clip To Database
			async handleLike (clip) {
				await db.collection('users')
					.doc(this.user.uid)
					.collection('likes')
					.doc(clip.tracking_id)
					.set(clip, { merge: true })
				console.log('clip added')
			},
		}
	}
</script>

