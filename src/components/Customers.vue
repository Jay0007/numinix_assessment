<template>
	<v-container class="mt-10">
		<v-row class="mt-15">
			<v-col cols="5">
				<v-text-field 
					label="Find customers" 
					hide-details 
					flat
					solo
					prepend-inner-icon="mdi-magnify"
					v-model="searchByName"
				></v-text-field>
			</v-col>

			<v-spacer></v-spacer>
			
			<v-col cols="3">
				<v-select
					:items="items"
					label="Filter by Name (A-Z)"
					flat
					solo
					v-model="sortByName"
				></v-select>
			</v-col>
		</v-row>
		<v-row class="mt-5">
			<h3 v-if="!filteredList.length">No customer(s) found with the search criteria.</h3>
			<v-col v-for="card in filteredList" :key="card.id" cols="12" xl="3" lg="3" md="4" xs="6">
				<CustomerCard :customerInfo="card"></CustomerCard>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import CustomerCard from './CustomerCard.vue';

	export default {
		name: 'Customers',

		components: {
			CustomerCard
		},

		created () {
			this.$axios.get('http://jsonplaceholder.typicode.com/users')
			.then(response => this.cards = response.data)
			.catch(err => console.log(err.message))
		},

		data: () => ({
			cards: [],
            searchByName: "",
			sortByName: "",
			items: ['Name (A-Z)', 'Name (Z-A)']
		}),

		computed: {
			filteredList: function () {
				return this.sortCustomersByName(this.filterCustomersByName(this.cards))
			}
		},

		methods: {
			filterCustomersByName: function (cards) {
				return cards.filter( card => {
					return card.name.toLowerCase().includes(this.searchByName.toLowerCase())
				})
			},

			sortCustomersByName: function (cards) {
				return cards.sort((customer1, customer2) => {
					let modifier = 1;
					if (this.sortByName === 'Name (Z-A)') modifier = -1;
					if (customer1["name"] < customer2["name"]) 
						return -1 * modifier;
					if (customer1["name"] > customer2["name"]) 
						return 1 * modifier;
					return 0;
				})
			}
		}
	};
</script>

<style>
	.v-card__subtitle, .v-card__text, .v-card__title {
		padding: 10px;
	}
</style>
