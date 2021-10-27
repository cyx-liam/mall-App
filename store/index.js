import Vue from 'vue';
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		cartList:[]
	},
	mutations:{
		isChoise(state,payload){
			let cartItem = state.cartList.find((item)=>item.id == payload.id)
			cartItem.choice =! cartItem.choice
		},
		choiseAll(state,payload){
			state.cartList.forEach(item=>{
				item.choice = payload
			})
		},
		addCartCount(state,payload){
			let cartItem = state.cartList.find((item)=>item.id == payload.id)
			cartItem.count++
		},
		subCartCount(state,payload){
			let cartItem = state.cartList.find((item)=>item.id == payload.id)
			cartItem.count--
		},
		addToCart(state,payload){
			state.cartList.push(payload)
		},
		delectCart(state){
			while(state.cartList.find(item=>item.choice)){
				for (let i = 0; i < state.cartList.length; i++) {
					if(state.cartList[i].choice){
						state.cartList.splice(i,1)
						break;
					}
					
				}
			}
			
		}
	},
	actions:{
		addCart({commit,state},payload){
			payload.choice = true
			console.log(payload);
			let oldInfo = state.cartList.find((item)=>{
				return item.id == payload.id
			})
			if(!oldInfo){
				uni.showToast({
				    title: '添加购物车成功',
				    duration: 1500
				});
				payload.count = 1
				commit('addToCart',payload)
			}else{
				uni.showToast({
					icon:"error",
				    title: '已添加购物车',
				    duration: 1500
				});
				// console.log('+1');
				// commit('addCartCount',oldInfo)
			}
		},
	},
	getters:{}
})

export default store