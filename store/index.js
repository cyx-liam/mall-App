import Vue from 'vue';
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		cartList:[]
	},
	mutations:{},
	actions:{
		addCart({commit},payload){
			console.log(payload);
		}
	},
	getters:{}
})

export default store