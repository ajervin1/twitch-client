<template>
	<section class="">
	
		<nav class="navbar navbar-dark bg-light py-3">
			<!--Logo-->
			<router-link to="/" class="navbar-brand">
				
				<span class="text-primary font-weight-medium">Twitch</span>
				<span class="text-primary font-weight-light">Clips</span>
			</router-link>
			<!--Search-->
			<SearchForm/>
			<!--Auth Buttons-->
			<div class="right-nav d-flex align-items-center">
				<ul class="d-flex align-items-center mb-0 mr-2">
					<router-link to="/" class="nav-link nav-item">Home</router-link>
					<router-link to="/favorites" class="nav-link nav-item">Favorites</router-link>
				</ul>
				<div class="auth-buttons">
					<button class="btn btn-primary btn-sm mr-2" v-if="!user" @click="login">
						Login
					</button>
					<button class="btn btn-danger btn-sm" v-else @click="logout">
						Logout
					</button>
				</div>
			</div>
		
		</nav>
	</section>

</template>

<script>
	/*
	 Logging In And Logging Out
	 * */
	import firebase from 'firebase'
	import { auth, db } from '../../db'
	import SearchForm from './channels/SearchForm'
	
	export default {
		name: 'NavBar',
		components: { SearchForm },
		computed: {
			user () {
				return this.$store.state.user
			}
		},
		methods: {
			async login () {
				const provider = new firebase.auth.GoogleAuthProvider()
				const userCredential = await auth.signInWithPopup(provider)
				const { user } = userCredential
				this.$store.state.user = { uid: user.uid, email: user.email }
				// Add User To Database
				const newuser = { uid: user.uid, email: user.email }
				console.log(newuser)
				await db.collection('users')
					.doc(user.uid)
					.set(newuser, { merge: true })
			},
			async logout () {
				this.$store.state.user = null
				await auth.signOut()
			},
		},
		mounted () {
			auth.onAuthStateChanged(user => {
				if (user) {
					this.$store.state.user = { uid: user.uid, email: user.email }
				}
			})
		}
	}
</script>
