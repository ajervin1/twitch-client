<template>
	<article class="font-size-xs border bg-dark text-white rounded shadow-lg">
		<img :src="clip.thumbnails.medium" class="img-fluid">
		<div class="meta-data px-4 pt-2">
			<div>{{ clip.title }}</div>
			<div>Views: {{ clip.views }}</div>
			<div>{{ clip.created_at }}</div>
			<div>{{ clip.game }}</div>
		</div>
		<div class="actions px-4 pb-4">
			<div>id {{ clip.tracking_id }}</div>
			<router-link class="badge badge-success" :to="`/clips/${clip.tracking_id}`">View</router-link>
			
		</div>
	</article>
</template>

<script>
	export default {
		name: 'ClipItem',
		props: [ 'clip' ]
	}
</script>
