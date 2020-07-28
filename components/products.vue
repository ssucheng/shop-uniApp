<template>
	<view class="">
		<view class="products_list">
			<view class="products_list_on" v-for="(item,index) in ProductData" :key="index" @click="btn(item.id)">
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
</template>

<script>
	export default{
		props:{
			ProductData:{
				type:Array,
				value:[]
			}
		},
		methods:{
			btn(id){
				this.$emit('productsItemClick',id)
			}
		},
		data(){
			return{
				
			}
		}
		
		
	}
</script>

<style lang="scss" scoped>
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
</style>
