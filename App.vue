<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	/*每个页面公共css */
	@import url("./static/iconfont/iconfont.css");
	/* 从后台返回的图片图片的类名 返回的html标签 */
	.gomeImgLoad{
		width: 750rpx;
		height: auto;
	}
</style>
