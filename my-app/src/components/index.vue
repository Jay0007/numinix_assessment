<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <searchFilter/>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards" :key="card.id" cols="3">
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
        .then(response => this.cards = response.data)
    },

    data: () => ({
      cards: []
    }),
  };
</script>
