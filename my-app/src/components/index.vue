<template>
	<v-container>
		<v-row class="mt-5">
			<v-col cols="12">
				<searchFilter/>
			</v-col>      
		</v-row>
		<v-row class="mt-5">
			<v-col v-for="card in $store.state.filteredList" :key="card.id" cols="3">
				<card :customerInfo="card"></card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import card from './customers/card';
	import searchFilter from './customers/searchFilter';

	export default {
		components: {
			card,
			searchFilter
		},

		created () {
			this.$axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response => this.$store.state.cards = response.data)
		},

		data: () => ({
			cards: []
		}),
	};
</script>
