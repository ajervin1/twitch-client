<template>
	<div>
		<h2 class="text-primary">Favorites</h2>
		<LikesList />
	</div>
</template>

<script>
	import LikesList from '../components/LikesList'
	export default {
		name: 'FavoritePage',
		components: { LikesList },
		data () {
			return {}
		}
	}
</script>
