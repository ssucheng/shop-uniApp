<template>
	<view class="shopDetail">
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
		<view class="box">
			<view class="price">
				<text>￥{{infoList.sell_price}}</text>
				<text>￥{{infoList.market_price}}</text>
			</view>
			<view class="tit">
				{{infoList.title}}
			</view>
			<view class="line"></view>
			<view class="info">
				<view class="">货号：{{infoList.goods_no}}</view>
				<view class="">库存：{{infoList.stock_quantity}}</view>
			</view>
			<view class="line"></view>
			<view class="introduction">
				<text>详细介绍</text>
				<view class="content">
					<rich-text :nodes="descList.content"></rich-text>
				</view>
			</view>
			
		</view>
		<view class="navbar">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	import {getImageInfoApi,getInfoApi,getDescApi} from '@/api/api.js'
	export default{
		components: {uniGoodsNav},
		data(){
			return{
				// id:0,
				carouselList:[],
				infoList:[],
				descList:[],
				 options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: '',
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: ''
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		onLoad(options){
			// console.log(options)
			// this.id = options.id
			this.getImageInfo(options.id)
			this.getInfo(options.id)
			this.getDesc(options.id)
			// 通过下面的方式可以实现更改数组中的数据
			//  this.options.forEach(item => {
			// 	console.log(item.info)
			// 	item.info = 4
			// })
			// console.log(this.options)
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
			},
			async getInfo(id){
				const {data:res} = await getInfoApi('/api/goods/getinfo/',{id})
				if(res.status !== 0) return uni.showToast({
					title:"获取商品详细参数失败"
				})
				this.infoList = res.message[0]
			},
			async getDesc(id){
				const {data:res} = await getDescApi('/api/goods/getdesc/',{id})
				if(res.status !== 0) return uni.showToast({
					title:"获取详细介绍失败"
				})
				this.descList = res.message[0]
			},
			   onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			      buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      }
			
		}
	}
</script>

<style lang="scss" >
	page{
		height: 100%;
		.shopDetail{
			
			.carousel{
				swiper{
					height: 700rpx;
					image{
						width: 100%;
						height:100%
					}
				}
			}
			.box{
				.price{
					padding: 0 10rpx;
					height: 60rpx;
					line-height: 60rpx;
					text:nth-child(1){
						font-size: 40rpx;
						color: red;
					}
					text:nth-child(2){
						text-decoration: line-through;
						color: #eee;
						margin-left: 20rpx;
						
					}
				}
				.tit{
					font-size: 32rpx;
					line-height: 60rpx;
					padding: 0 10rpx;
				}
				.info{
					padding: 0 10rpx;
					font-size: 32rpx;
					line-height: 60rpx;
				}
				.introduction{
					padding: 0 10rpx;
					font-size: 50rpx;
					line-height: 80rpx;
					
					.content{
						border-top: 1px solid #eee;
						font-size: 28rpx;
						color: #333;
						line-height: 50rpx;
						padding-bottom: 50rpx;
						
					}
				}
			}
		}
	}
.line{
	height: 10rpx;
	width: 750rpx;
	background-color: #eee;
}	
.navbar{
	width: 750rpx;
	position: fixed;
	bottom: 0;
}
</style>
