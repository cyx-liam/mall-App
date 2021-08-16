<template>
	<!-- <uni-row class="category-data">
			<uni-col :xs="8" :sm='6' :md='4' :lg='2' class="data-item" v-for="item in categoryData">
			<view class="data">
				<view class="img"><image :src="item.image" mode="widthFix"></image></view>
				<view class="title">{{item.title}}</view>
			</view>
		</uni-col>
	</uni-row> -->
	
	<view class="category-data">
		<match-media max-width="768">
			<view class="data">
				<view class="data-item1" v-for="item in categoryData" :key='item.image'>
					<image :src="item.image" mode="widthFix"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</match-media>
		<match-media max-width="992" min-width="768">
			<view class="data">
				<view class="data-item2" v-for="item in categoryData" :key='item.image'>
					<image :src="item.image" mode="widthFix"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</match-media>
		<match-media max-width="1200" min-width="992">
			<view class="data">
				<view class="data-item3" v-for="item in categoryData" :key='item.image'>
					<image :src="item.image" mode="widthFix"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</match-media>
		<match-media min-width="1200">
			<view class="data">
				<view class="data-item4" v-for="item in categoryData" :key='item.image'>
					<image :src="item.image" mode="widthFix"></image>
					<view class="title">{{item.title}}</view>
				</view>
			</view>
		</match-media>
	</view>
</template>

<script>
	export default{
		props: {
			categoryData: {
				type: Array,
				default: ()=>[]
			}
		},
	}
</script>

<style scoped lang="less">
	.imageStyle(){
		width: 90%;
		margin:30rpx 0 10rpx;
	}
	
	.category-data{
		// border: 1px solid #000;
		width: 100%;
		color: #666;
		font-size: 28rpx;
		.data{
			display: flex;
			flex-wrap: wrap;
			.data-item1{
				width: calc(100% / 3);
				text-align: center;
				image{
					.imageStyle()
				}
			}
			.data-item2{
				width: calc(100% / 4);
				text-align: center;
				image{
					.imageStyle()
				}
			}
			.data-item3{
				width: calc(100% / 6);
				text-align: center;
				image{
					.imageStyle()
				}
			}
			.data-item4{
				width: calc(100% / 8);
				text-align: center;
				image{
					.imageStyle()
				}
			}	
		}
		// .data-item{
		// 	border: 1px solid #000;
		// 	.data{
		// 		width:100%;
		// 		text-align: center;
		// 		.img{
		// 			margin: 0 auto;
		// 			text-align: center;
		// 			width:90%;
		// 			border: 1px solid #000;
		// 			image{
		// 				border: 1px solid #000;
		// 				width: 100%;
		// 				// height: 50rpx;
		// 				margin:30rpx 0 15rpx;
		// 			}
		// 		}
		// 	}
		// }
		
	}
</style>
