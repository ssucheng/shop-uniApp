<template>
	<view class="">
		<view class="home">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500" :circular="true">
				<swiper-item v-for="(item,index) in Carousel" :key="index" @click="btn(index)">
					<image :src="item.img" mode="">a</image>
				</swiper-item>
				<!-- <swiper-item>
					<image src="http://destiny001.gitee.io/image/ban2.jpg" mode=""></image>
				</swiper-item> -->
			</swiper>
		</view>
	</view>
</template>

<script>
	import {getLunBo} from '@/api/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				Carousel:[]
				
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
	}
</style>
