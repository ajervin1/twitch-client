<template>
	<div>
		<FilterPeriod/>
		<ClipsList/>
	</div>
</template>

<script>
	
	import { auth } from '../../db'
	import firebase from 'firebase'
	import FilterPeriod from '../components/clips/FilterPeriod'
	import ClipsList from '../components/clips/ClipsList'
	
	export default {
		name: 'HomePage',
		components: { ClipsList, FilterPeriod },
		
	}
</script>
