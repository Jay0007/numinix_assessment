import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        cards: [],
        filteredList: []
    },

    mutations:{
        updating(state, name){
            state.filteredList.filter((list)=>list.name.toLowerCase().indexOf(name.toLowerCase())>= 0)
        }
    },
    
    actions:{
        updatelist(context, payload){
            context.commit("updating", payload)
        }
    }
    
})