<template>
	<view class="community">
		 <scroll-view  :scroll-y='true' @scrolltoupper="upper" @scrolltolower="lower" class="left"
		                @scroll="scroll">
		    <view v-for="(item,index) in picsList" :key="index"  
				 class="scroll-view-item "
				 :class="index === active?`active`:``" 
				 @click="scrollBtn(index)">
				{{item.title}}
			</view>
		                  	
		  </scroll-view>
	</view>
</template>

<script>
	import {getPicsApi} from '@/api/api.js'
	export default{
		data(){
			return{
				picsList:[],
				active:0
			}
		},
		 onLoad(){
			this.getPics()
		},
		methods:{	
			upper(){
				console.log('我到顶了')
			},
			lower(){
				console.log('我到底了')
			},
			scroll(){
				// console.log('');
			},
			async getPics(){
				const {data:res } = await getPicsApi('/api/getimgcategory')
				if(res.status !== 0) return uni.showToast({title:'获取图片分类失败'})
				this.picsList = res.message
			},
			scrollBtn(index){
				this.active = index
			}
		}
		// computed:{
		// 	isActive(){
		// 		this.active === index?'active':''
		// 	}
		// }
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		.community{
			height: 100%;
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
		}
		
	}
	.active{
		background-color:$global-color;
		color: #fff;
	}
	
</style>
