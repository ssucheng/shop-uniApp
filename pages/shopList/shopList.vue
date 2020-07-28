<template>
	<view class="list">
		<sc-products :ProductData="productsList" @productsItemClick='clickBtn'></sc-products>
		<view class="baseLine" v-if="flag">---我也是有底线的---</view>
	</view>
</template>

<script>
	import products from '@/components/products.vue'
	import {getProductsApi} from '@/api/api.js'
	export default{
		components:{scProducts:products},
		data(){
			return{
				index:1,
				productsList:[],
				flag:false
			}
		},
		onLoad(){
			this.getList()
			
		},
		onReachBottom(){
			// console.log('触底了')
			if(this.productsList.length < this.index * 10 ) return this.flag = true
			this.index ++ 
			this.getList()
			
		},
		 onPullDownRefresh() {
		        // console.log('refresh');
				this.index = 1
				this.productsList = []
				this.flag = false
				let that = this
		        setTimeout(function () {
					that.getList(()=>{
						uni.stopPullDownRefresh()
					})
		           
		        }, 1000);
		    }
		,methods:{
			async getList(callback){
				const {data:res} = await getProductsApi(`/api/getgoods?pageindex=${this.index}`)
				if(res.status !== 0) return uni.showToast({title:'获取商品列表失败'})
				this.productsList = [...this.productsList,...res.message]
				 // uni.stopPullDownRefresh();数据请求成功调用刷新停止,但是这样写不对,因为每次请求都要重复这行代码
											// 解决方案:只有下拉刷新的时候调用
											// 用回调函数的方式解决
				callback &&	callback() 	 //callback && callback() 相当于 if callback 『{callback()}
			},
			clickBtn(id){
				uni.navigateTo({
					url:'../shopListDetail/shopListDetail?id='+id
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.list{
		background-color: #eee;
		.baseLine{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			font-size: 28rpx;
			letter-spacing: 28rpx;
		}
	}
</style>
