<template>
	<v-app>
		<v-app-bar fixed class="app-bar"></v-app-bar>
		<v-main class="main">
			<Customers/>
		</v-main>
	</v-app>
</template>

<script>
	import Customers from './components/Customers.vue';

	export default {
		name: 'App',

		components: {
			Customers
		}
	};
</script>

<style>
	.main {
		background-color: #f2f5fa;
	}

	.app-bar {
		background-color: white;
	}
</style>
