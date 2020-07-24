<template>
	<view class="list">
		<sc-products :ProductData="productsList"></sc-products>
		<view class="baseLine" v-if="tag">---我也是有底线的---</view>
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
				tag:false
			}
		},
		onLoad(){
			this.getList()
			
		},
		onReachBottom(){
			console.log('触底了')
			if(this.productsList.length < this.index * 10 ) return this.tag = true
			this.index ++ 
			this.getList()
			
		},
		 onPullDownRefresh() {
		        console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		    }
		,methods:{
			async getList(){
				const {data:res} = await getProductsApi(`/api/getgoods?pageindex=${this.index}`)
				if(res.status !== 0) return uni.showToast({title:'获取商品列表失败'})
				this.productsList = [...this.productsList,...res.message]
			}
		}
		
	}
</script>

<style lang="scss">
	.list{
		background-color: #eee;
		.baseLine{
			
		}
	}
</style>
