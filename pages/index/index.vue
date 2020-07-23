<template>
	<view class="content">
		首页
	</view>
</template>

<script>
	import {getLunBo} from '@/api/api.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		async onLoad() {
		const {data:res} = await getLunBo('/api/getlunbo')
		console.log(res)
		
		},
		
		methods: {
			
		}
	}
</script>

<style>
	
</style>
