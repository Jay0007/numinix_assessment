<template>
    <v-row>
        <v-col cols="5">
            <v-text-field 
                label="Find customers" 
                hide-details 
                flat
                solo
                prepend-inner-icon="mdi-magnify"
                v-model = "searchByName"
            ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>
        
        <v-col cols="3">
            <v-select
                :items="items"
                label="Filter by Name (A-Z)"
                flat
                solo
            ></v-select>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            items: ['Name (A-Z)', 'Name (Z-A)'],
            searchByName: ""
        }),
        
        computed: {
            filteredList: function () {
                return this.$store.state.cards.filter( (card) => {
                    return card.name.match(this.searchByName) !== null
                });
            }
        }
    }
</script>

<style>

</style>