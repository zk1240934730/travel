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
	@import 'css/uni.css';
	@import 'css/common.css';
	@import 'css/iconfont.css';
	@import 'css/flight/flight.css';
	@import 'css/iflight/iflight.css';
	@import 'css/hotel/hotel.css';


	page {
		background-color: #f5f6f7;
	}
</style>
