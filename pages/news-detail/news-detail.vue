<template>
	<view class="newsDetail">
		<view class="newsList">
			<view class="tit">
			   {{newsDetailList.title}}
			</view>
			<view class="txt">
				<view class="">
					<text>发表时间：{{newsDetailList.add_time |formateDate}} </text>
				</view>
				<view class="">
					<text >浏览：{{newsDetailList.click}} </text>
				</view>
				<view style="clear:both">
					
				</view>
			</view>
			<view class="">
				<rich-text :nodes="newsDetailList.content"></rich-text>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {getNesDetailApi} from '@/api/api.js'
	export default{
		data(){
			return {
				id:0,
				newsDetailList:{}
			}
		},
		onLoad(options){
			// onLoad  可以拿到跳转到这个页面的参数  参数options
			console.log(options)
			this.id = options.id
			this.getNewsDetail()
		},
		methods:{
			async getNewsDetail(){
				const {data:res} = await getNesDetailApi('/api/getnew/',{
					id:this.id
				})
				if(res.status !== 0) return uni.showToast({
					title:'获取资讯详情失败'
				})
				this.newsDetailList = res.message[0]
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.tit{
		width: 100%;
		height: 120rpx;
		// line-height: 120rpx;
		font-size: 40rpx;
		text-align: center;
		background-color: skyblue;
	}
	.txt{
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		background-color: skyblue;
		// height: 88rpx;
	}
	
</style>
