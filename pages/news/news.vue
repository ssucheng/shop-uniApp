<template>
	<view class="news">
		<view class="news_item" v-for="(item,index) in newsList" :key="index">
			<view class="newsLeft">
				<image :src="item.img_url" mode=""></image>
			</view>
			<view class="newsRight">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="rest">
					<view >
						发表时间：{{item.add_time |capitalize}}
					</view>
					<view class="last">
						浏览：{{item.click}}次
					</view>
				</view>
			</view>
		</view>	
	</view>
</template>

<script>
	import {getNewsApi} from '@/api/api.js'
	export default{
		data(){
			return{
				newsList:[]
			}
		},
		onLoad(){
			this.getNews()
		},
		methods:{
			async getNews(){
				const {data:res} = await getNewsApi('/api/getnewslist')
				if(res.status !== 0) return uni.showToast({
					title:'获取资讯列表失败'
				})
				this.newsList = res.message
			}
		},
		filters: {
		  capitalize: function (value) {
			  // 2015-04-16T03:50:28.000Z  以T为分界线切割字符串 
		    if (!value) return ''
		    const index = value.lastIndexOf('T')
		    return value.substring(0,index)
		  }
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		.news_item{
			height: 220rpx;
			display: flex;
			// background-color: pink;
			border-bottom: 1px solid $global-color;
			padding: 20rpx;
			.newsLeft{
				width: 250rpx;
				height: 200rpx;
				border-radius: 5px;
				overflow: hidden;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.newsRight{
				width: 500rpx;
				padding: 10rpx 10rpx 10rpx 20rpx;
				box-sizing: border-box;
				.tit{
					font-size: 32rpx;
				}
				.rest{
					display: flex;
					font-size: 26rpx;
					margin-top: 70rpx;
					.last{
						margin-left:30rpx
					}
				}
			}
		}
	}
	
	
</style>
