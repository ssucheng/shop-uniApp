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
			<!-- 商品推荐   products：商品 -->
			<view class="products">
				<view class="tit">
					推荐商品
				</view>
				<view class="products_list">
					<view class="products_list_on" v-for="(item,index) in productsList" :key="index">
						<view class="img">
							<image :src="item.img_url" mode=""></image>
						</view>
						<view class="price">
							<text>￥{{item.sell_price}}</text>
							<text> ￥{{item.market_price}}</text>
						</view>
						<view class="brand">
							{{item.title}}
						</view>
					</view>
			
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getLunBoApi,getProductsApi} from '@/api/api.js'
	export default {
		data() {
			return {
				title: 'Hello',
				Carousel:[],//轮播图数据
				navList:[ //导航图标和文本数据
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
				],
				productsList:[]
			}
		},
		async onLoad() {
			//轮播图数据请求
		const {data:res} = await getLunBoApi('/api/getlunbo')
		// console.log(res)
		if(res.status !== 0) return uni.showToast({title:'获取数据失败'})
			// uni.showToast({
			// 	title:'获取数据成功'
			// })
		 this.Carousel = res.message
		const {data:res1} = await getProductsApi('/api/getgoods?pageindex=1')
		 console.log(res1)
		if(res.status !== 0) return uni.showToast({
			title:'获取商品数据失败'
		})
		 this.productsList = res1.message
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
		//导航
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
		//推荐商品
		.products{
			background: #eee;
			overflow: hidden; //可以解决坍缩
			margin-top:20rpx;
			 //标题
			.tit{
				height: 100rpx;
				line-height: 100rpx;
				color: $global-color;
				text-align: center;
				letter-spacing: 40rpx;
				background-color: #fff;
				margin:7px auto;
				font-size: 40rpx;
			}
			//商品
			.products_list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				padding:0 15rpx;
				.products_list_on{
					padding: 0 10rpx;
					box-sizing: border-box;
					background-color: #fff;
					width: 49%;
					margin:5rpx 0;
					.img{
						width: 80%;
						height: 300rpx;
						margin: 0 auto;
						image{
							width: 100%;
							height: 100%;
						}
					}
					.price{
						color: $global-color;
						font-size: 40rpx;
						margin:20rpx 0 5rpx 0;
						text:nth-child(2){
							color: #ccc;
							font-size: 28rpx;
							margin-left:17rpx;
							text-decoration: line-through; //花掉属性
						}
					},
					.brand{
						font-size:28rpx;
						line-height: 50rpx;
						// 设置超出两行的文本显示  .....
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					
				}
			}
		}
	
	}
	
</style>
