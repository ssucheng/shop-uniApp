<template>
	<view class="">
		<view class="home">
			<!-- 轮播图 -->
			<view class="carousel">
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
					<swiper-item v-for="(item,index) in Carousel" :key="index" @click="btn(index)">
						<image :src="item.img" mode="">a</image>
					</swiper-item>
					<!-- <swiper-item>
						<image src="http://destiny001.gitee.io/image/ban2.jpg" mode=""></image>
					</swiper-item> -->
				</swiper>
			</view>
			<!-- 导航区域 -->
			<view class="nav">
				<view class="nav_item" v-for="(item,index) in navList" :key=index>
					<view :class="item.icon">
						
					</view>
					<text>{{item.text}}</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import {getLunBo} from '@/api/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				Carousel:[],//轮播图数据
				navList:[
					{
						text:'商城超市',
						icon:'iconfont icon-shangpin'
					},
					{
						text:'联系我们',
						icon:'iconfont icon-guanyuwomen'
					},
					{
						text:'社区图片',
						icon:'iconfont icon-tupian'
					},
					{
						text:'学习视频',
						icon:'iconfont icon-shipin'
					},
				]
				
			}
		},
		async onLoad() {
		const {data:res} = await getLunBo('/api/getlunbo')
		console.log(res)
		if(res.status !== 0) return uni.showToast({title:'获取数据失败'})
		 this.Carousel = res.message
		
		},
		
		methods: {
			btn(index){
				console.log(index)
			}
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			// swiper-item 的高度宽度是由swiper决定的 默认设置 成了百分之百
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				// background-color: pink;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					margin:0 auto;  //盒子在所在盒子中居中
					line-height: 120rpx; //上下居中	
					background-color:$global-color ;
					color: #fff;
					font-size: 50rpx;
					border-radius: 50%;
					margin:20rpx auto;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
	}
</style>
