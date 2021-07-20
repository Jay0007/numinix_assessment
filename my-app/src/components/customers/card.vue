<template>
    <v-card class="customerCard">
        <v-hover v-slot:default="{hover}">
            <v-img
                :src="profilePhoto"
            >
                <v-expand-transition>
                    <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out v-card--reveal"
                        >
                        <v-btn class="mr-3">Edit</v-btn>
                        <v-btn color="primary">View</v-btn>
                    </div>
                </v-expand-transition>
            </v-img>
        </v-hover>
        

        <div class="container">
            <v-card-title class="title">
                {{ customer.name }}
            </v-card-title>
            
            <v-card-subtitle class="subtitle">
                @{{ customer.username }}
            </v-card-subtitle>

            <v-card-subtitle>
                <p class="catchPhrase">"{{ customer.company.catchPhrase }}"</p>
            </v-card-subtitle>

            <v-card-text>
                <div>
                    <v-icon color='#015989' class="mr-3">mdi-email-outline</v-icon>
                    <p class="cardText d-inline-block"><a href="#">{{ customer.email }}</a></p>
                </div>

                <div class="d-flex">
                    <v-icon color='#015989' class="mr-3 d-inline">mdi-map-marker-outline</v-icon>
                    <p class="cardText d-inline-block">{{ fullAddress }}</p>
                </div>

                <div>
                    <v-icon color='#015989' class="mr-3">mdi-phone-outline</v-icon>
                    <p class="cardText d-inline-block">{{ customer.phone }}</p>
                </div>
                
                <div>
                    <v-icon color='#015989' class="mr-3">mdi-web</v-icon>
                    <p class="cardText d-inline-block"><a href="#">{{ customer.website }}</a></p>
                </div>

                <div>
                    <v-icon color='#015989' class="mr-3">mdi-briefcase-variant-outline</v-icon>
                    <p class="cardText d-inline-block">{{ customer.company.name }}</p>
                </div>

                <div>
                    <v-icon color='#015989' class="mr-3">mdi-factory</v-icon>
                    <p class="cardText d-inline-block">{{ bsCaps }}</p>
                </div>
            </v-card-text>
        </div>
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
                        this.customer.address.suite + ',\n' +
                        this.customer.address.city + ', ' +
                        this.customer.address.zipcode + ',\n' +
                        this.customer.address.geo.lat + ', ' +
                        this.customer.address.geo.lng
            },

            bsCaps: function () {
                return this.customer.company.bs.charAt(0).toUpperCase() + this.customer.company.bs.slice(1)
            },

            profilePhoto: function() {
                try {
                    var imgPath = require('../../assets/images/' + this.customer.name + '.jpg');
                } catch (err) {
                    imgPath = require('../../assets/images/default.jpg');
                }

                return imgPath;
            }
            
        }
    }
</script>

<style>
    .customerCard {
        background: #FFFFFF;
        border-radius: 8px;
    }

    .title {
        font-weight: 500;
        font-style: normal;
        color: #202223;
    }

    .subtitle {
        font-weight: normal;
        font-style: normal;
        color: #919191
    }

    .catchPhrase {
        color: #51C5FF;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 25px;
    }

    .cardText {
        font-size: 16px;
        color: #202223;
        white-space: pre;
    }

    .cardText a {
        text-decoration: none;
        color: #202223 !important;
    }

    .v-card--reveal {
        align-items: center;
        bottom: 50%;
        justify-content: center;
        position: absolute;
        width: 100%;
    }
</style>