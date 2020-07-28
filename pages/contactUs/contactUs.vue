<template>
	<view class="">
		<!-- 图标区 -->
		<view class="pics">
			<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		</view>
		<view class="phone" @click="telphone">
			联系电话：***-***-*** （点击拨打）
		</view>
		<view class="adress">
			校区地址： 海南省海口市琼山区龙昆南路99号,桂林洋校区办学地址为：海南省海口市美兰区校际一号路3号
		</view>
		 <map style="width: 750rpx; height: 750rpx;" :latitude="latitude" :longitude="longitude" :markers="covers" @markertap="btn"></map>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				latitude:20.002057,
				longitude:110.350948,
				covers:[{
					id:0,
					latitude:20.002057,
					longitude:110.350948,
					iconPath:'../../static/icon/location.png'
				}]
			}
		},
		methods:{
			btn(val){
				console.log(val)
			},
				
			telphone(){
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pics{
		width: 750rpx;
		height: 300rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.phone{
		width: 100%;
		height: 120rpx;
		font-size: 35rpx;
		line-height: 120rpx;
		border-bottom:1px solid #eee;
		padding-left: 20rpx;
	}
	.adress{
		width: 100%;
		height: 280rpx;
		font-size: 35rpx;
		line-height: 90rpx;
		border-bottom:1px solid #eee;
		padding-left: 20rpx;
		
	}
</style>
