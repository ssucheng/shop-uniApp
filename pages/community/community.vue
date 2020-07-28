<template>
	<view class="community">
		 <scroll-view  :scroll-y='true' @scrolltoupper="upper" @scrolltolower="lower" class="left"
		                @scroll="scroll">
		    <view v-for="(item,index) in picsList" :key="index"  
				 class="scroll-view-item "
				 :class="index === active?`active`:``" 
				 @click="scrollBtn(index,item.id)">
				{{item.title}}
			</view>
		                  	
		  </scroll-view>
		  <scroll-view  :scroll-y='true'  class="right"
		                 @scroll="scroll">
		     <view v-for="(item,index) in picsImageList" :key="index" >
		  			<view class="first" @click="preImg(item.img_url)">
		  				<image :src="item.img_url" mode=""></image>
		  			</view>
					<view class="second">
						{{item.title}}
					</view>
					 
		    </view>
		           	<view class="" v-if="picsImageList.length ===0 ?true:false">
		           					 暂无数据
		           	</view> 
		   </scroll-view>
	</view>
</template>

<script>
	import {getPicsApi,getImagesApi} from '@/api/api.js'
	export default{
		data(){
			return{
				picsList:[],
				active:0,
				picsImageList:[]
			}
		},
		 onLoad(){
			uni.showLoading({title: '加载中',mask:true})
			setTimeout( () =>{
				this.getPics(()=> {
					uni.hideLoading();
				})
			}, 500);

		},
		methods:{	
			upper(){
				// console.log('我到顶了')
			},
			lower(){
				// console.log('我到底了')
			},
			scroll(){
				// console.log('');
			},
			async getPics(callback){
				const {data:res } = await getPicsApi('/api/getimgcategory')
				if(res.status !== 0) return uni.showToast({title:'获取图片分类失败'})
				this.picsList = res.message
				
				// 默认进入页面是显示第四个  因为第一个接口没有数据 一般是默认第一个
				this.scrollBtn(this.active,this.picsList[0].id)
				 callback && callback()
			},
			// 点击事件
			 async scrollBtn(index,id){
				 uni.showLoading({
				 	title:"加载中",
					mask:true
				 })
				
				setTimeout( () => {
				    this.getImages(index,id,()=>{
						uni.hideLoading()
					})
				}, 500);
			},
			// 获取详细
			async getImages(index,id,callback){
				this.active = index
				const {data:res} = await getImagesApi('/api/getimages/',{id:id})
				if (res.status !== 0) return uni.showToast({
					title:'获取详情数据失败'
				})
				this.picsImageList = res.message
				callback && callback()
			},
			preImg(current){
				let urls = this.picsImageList.map(item => {
					return item.img_url
				})	
				uni.previewImage({
				current,
				urls
				})
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		.community{
			height: 100%;
			display: flex;
			.left{
				height: 100%;
				width: 28%;
				// background-color: pink;
				.scroll-view-item{
					height: 150rpx;
					line-height: 150rpx;
					border:  1px solid #eee;
					border-top:none;
					border-left: none;
					text-align: center;
					// background-color: blue;
				}
				// .active{
				// 	background-color:$global-color;
				// 	color: #fff;
				// }
				
				
			}
			.right{
				height: 100%;
				// background-color: pink;
				width:72% ;
				.first{
					width: 100%;
					height: 530rpx;
					border-radius: 16px;
					overflow: hidden;
						
					image{
						width: 100%;
						height: 100%;
					}
				}
				.second{
					font-size: 32rpx;
					line-height: 60rpx;
				}
				
			}
		}
		
	}
	.active{
		background-color:$global-color;
		color: #fff;
	}
	
</style>
