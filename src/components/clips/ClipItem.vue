<template>
	<article class="font-size-xs border bg-secondary text-white rounded shadow-lg">
		<img :src="clip.thumbnails.medium" class="img-fluid">
		<div class="meta-data px-4 pt-2 text-dark">
			<div><strong>Title: </strong>{{ clip.title }}</div>
			<div><strong>Views: </strong>: {{ clip.views }}</div>
			<div><strong>Created At: </strong> {{ clip.created_at }}</div>
			<div><strong>Game: </strong>{{ clip.game }}</div>
		</div>
		<div class="actions px-4 pb-4 text-dark">
			<router-link class="btn btn-primary" :to="`/clips/${clip.tracking_id}`">View
			</router-link>
		</div>
	</article>
</template>

<script>
	export default {
		name: 'ClipItem',
		props: [ 'clip' ]
	}
</script>
