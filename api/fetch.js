export function fetch (options){
	return new Promise((resolve,reject) => {
		uni.request({
			url:options.url,
			method:options.method,
			data:options.data,
			success:(response)=>{
				resolve(response)
			},
			fail:(err) => {
				reject(err)
			}
		})
	})
}