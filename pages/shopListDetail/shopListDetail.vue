<template>
	<view class="">
		<view class="" >
			{{id}}
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id:0
			}
		},
		onLoad(options){
			console.log(options)
			this.id = options.id
		},
		methods:{
			// clickBtn(){
				
			// }
		}
	}
</script>

<style lang="scss">
	
</style>
