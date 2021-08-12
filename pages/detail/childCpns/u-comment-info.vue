<template>
	<view  class="comment-info">
		<view class="comment-head">
			<text class="title">用户评论</text>
			<text class="more">更多 >></text>
		</view>
		<view v-if="commentInfo.user" class="userInfo">
			<image :src='commentInfo.user.avatar' mode="widthFix"></image>
			<text>{{commentInfo.user.uname}}</text>
		</view>
		<view class="content">
			<view class="comment">
				{{commentInfo.content}}
			</view>
			<view class="info">
				<text class="date">
					{{createTime(commentInfo.created)}}
				</text>
				<text class="size">
					{{commentInfo.style}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {formatDate} from "../../../utils/util.js"
	export default{
		props: {
			commentInfo:Object
		},
		methods: {
			createTime(value) {
				let date = new Date(value*1000)
				return formatDate(date,'yyyy-MM-dd')
			}
		},
	}
</script>

<style lang="less" scoped>
	.comment-info{
		color: #797979;
		padding: 10rpx 20rpx 15rpx;
		border-bottom: 6px solid #f3f3f3;
		.comment-head{
			line-height: 100rpx;
			font-size: 35rpx;
			border-bottom: 1rpx #ececec solid;
			.more{
				float: right;
			}
		}
		.userInfo{
			margin:30rpx 0;
			display: flex;
			align-items: center;
			font-size: 35rpx;
			color: #666;
			image{
				width: 100rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
		}
		.content{
			margin-bottom: 40rpx;
			.comment{
				text-indent: 1.5em;
				font-size: 32rpx;
			}
			.info{
				margin-top: 18rpx;
				font-size: 25rpx;
				.date{
					margin-right: 30rpx;
				}
			}
		}
	}
</style>
