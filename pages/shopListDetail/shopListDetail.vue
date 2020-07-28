<template>
	<view class="page">
		<view class="carousel" >
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
				<swiper-item v-for="(item,index) in carouselList" :key="index" >
					<image :src="item.src" mode=""></image>
				</swiper-item>
				<!-- <swiper-item>
					<image src="http://destiny001.gitee.io/image/ban2.jpg" mode=""></image>
				</swiper-item> -->
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import {getImageInfoApi} from '@/api/api.js'
	export default{
		data(){
			return{
				carouselList:[]
			}
		},
		onLoad(options){
			// console.log(options)
			this.getImageInfo(options.id)
		},
		methods:{
			async getImageInfo(id){
				const {data:res} = await getImageInfoApi('/api/getthumimages/',{
					id
				})
				if(res.status !== 0) return uni.showToast({
					title:"获取商品详情轮播图失败"
				})
				this.carouselList = res.message
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		height: 100%;
		.carousel{
			swiper{
				height: 700rpx;
				image{
					width: 100%;
					height:100%
				}
			}
		}
	}
</style>
