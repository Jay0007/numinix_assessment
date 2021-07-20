<template>
	<v-app>
		<v-app-bar fixed class="app-bar"></v-app-bar>
		<v-main class="main">
			<index/>
		</v-main>
	</v-app>
</template>

<script>
	import index from './components/index';

	export default {
		name: 'App',

		components: {
			index
		},

		data: () => ({
			//
		}),
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
