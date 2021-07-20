<template>
    <v-card class="customerCard">
        <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        ></v-img>

        <v-card-title>
            {{ customer.name }}
        </v-card-title>

        <v-card-subtitle>
            @{{ customer.username }}
        </v-card-subtitle>

        <v-card-subtitle>
            <div class="catchPhrase">"{{ customer.company.catchPhrase }}"</div>
        </v-card-subtitle>

        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">                
                {{ customer.email }}
            </span>
        </v-row>
        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">
                {{ fullAddress }}
            </span>
        </v-row>
        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">
                {{ customer.phone }}
            </span>
        </v-row>
        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">
                {{ customer.website }}
            </span>
        </v-row>
        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">
                {{ customer.company.name }}
            </span>
        </v-row>
        <v-row>
            <v-icon color="#015989">mdi-email-outline</v-icon>
            <span class="cardText">
                {{ customer.company.bs }}
            </span>
        </v-row>
    </v-card>
</template>

<script>
    export default {
        props: ["customerInfo"],
        data: function () {
            return {
                customer: this.customerInfo
            }
        },

        computed: {
            fullAddress: function () {
                return this.customer.address.street + ', ' + 
                        this.customer.address.suite + ', ' +
                        this.customer.address.city + ', ' +
                        this.customer.address.zipcode + ', ' +
                        this.customer.address.geo.lat + ', ' +
                        this.customer.address.geo.lng
            }
        }
    }
</script>

<style>
    .customerCard {
        background: #FFFFFF;
        border-radius: 8px;
    }

    .catchPhrase {
        color: #51C5FF;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
    }

    .cardText {
        font-family: Rubik;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 25px;
        color: #202223;
    }
</style>