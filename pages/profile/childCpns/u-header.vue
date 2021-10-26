<template>
	<view class="header">
		<view class="head"><image src="~@/static/image/profile/avatar.png" mode="widthFix"></image></view>
		<view class="login">
			<view class="login-reg"><text>登录</text>/<text>注册</text></view>
			<view class="phone">
				<image src="~@/static/image/profile/phone.png" mode="widthFix"></image>
				<text>暂无绑定手机号</text>
			</view>
		</view>
		<view class="right"><image src="~@/static/image/common/arrow-right.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="less">
	.header{
		background-color: #ff5777;
		display: flex;
		align-items: center;
		padding: 30rpx 0 30rpx 30rpx;
		.head{
			// border: 1px solid #000;
			background-color:#fff;
			border-radius: 50%;
			width: 150rpx;
			image{
				width: 100%;
			}
		}
		.login{
			flex: 1;
			// border: 1px solid #000;
			color: #fff;
			padding-left: 20rpx;
			.login-reg{
				font-size: 40rpx;
				padding: 0 0 15rpx 10rpx;
			}
			.phone{
				display: flex;
				align-items: center;
				image{
					width: 40rpx;
				}
			}
				
		}
		.right{
			// border: 1px solid #000;
			width: 80rpx;
			image{
				width: 90%;
			}
		}
	}
</style>
