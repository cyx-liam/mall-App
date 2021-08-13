<template>
	<view class="buttom-bar">
		<view class="choise-all" @click="checkedAll">
			<icon class="icon" type="success" :color="choiseAll ? '#ff5777':'#dcdcdc'" ></icon>
			<text>全选</text>
		</view>
		<view class="totalPrice">总计:￥{{totalPrice}}</view>
		<view class="btn">
			<view class="delect" @click="delect">删除</view>
			<view class="calc">去计算({{cartChoise.length}})</view>
		</view>
	</view>
</template>

<script>
	export default{
		computed:{
			cartChoise(){
				return this.$store.state.cartList.filter(item=>item.choice)
			},
			choiseAll(){
				if(!this.$store.state.cartList.length){
					return false
				}
				return this.cartChoise.length == this.$store.state.cartList.length
			},
			totalPrice(){
				return this.cartChoise.reduce((preValue,item)=>{
					return preValue + item.price*item.count
				},0).toFixed(2)
			}
		},
		methods: {
			checkedAll() {
				// console.log(this.$store.state.cartList.length);
				let isChoiseAll = !this.choiseAll
				this.$store.commit("choiseAll",isChoiseAll)
			},
			delect(){
				this.$store.commit("delectCart")
				uni.setNavigationBarTitle({
				    title: `购 物 车 (${this.$store.state.cartList.length})`
				});
			}
		},
	}
</script>

<style scoped lang="less">
	.buttom-bar{
		display: flex;
		align-items: center;
		line-height: 44px;
		background-color: #ececec;
		position: fixed;
		bottom: 0px;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		bottom: 50px;
		/* #endif */
		.choise-all{
			margin: 0 25rpx 0 15rpx;
			color: #666;
			display: flex;
			.icon{
				display: flex;
				align-items: center;
				margin-right: 5px;
			}
		}
		.btn{
			flex: 1;
			display: flex;
			justify-content: flex-end;
			color: #fff;
			.delect{
				padding: 0 25rpx;
				background-color: #ffa200;
				letter-spacing: 3rpx;
			}
			.calc{
				padding: 0 30rpx;
				background-color: #ff5400;
				letter-spacing: 5rpx;
			}
		}
	}
</style>
