<template>
	<view class="news">
		<news-item :list="newsList" @clickitem="navgation"></news-item>
	</view>
</template>

<script>
	import {getNewsApi} from '@/api/api.js'
	import newsItem from '@/components/newsList.vue'
	
	export default{
		components:{newsItem},
		data(){
			return{
				newsList:[]
			}
		},
		onLoad(){
			this.getNews()
		},
		methods:{
			async getNews(){
				const {data:res} = await getNewsApi('/api/getnewslist')
				if(res.status !== 0) return uni.showToast({
					title:'获取资讯列表失败'
				})
				this.newsList = res.message
			},
			navgation(id){
				uni.navigateTo({
					url:'../news-detail/news-detail?id='+id
				})
			}
		}
		
	}
</script>

<style lang="scss">
	page{
		height: 100%;
		
	}
	
	
</style>
