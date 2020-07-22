const BASE_URL = "http://localhost:8082"
export const http = (options) =>{
	return new Promise((resolve,reject) => {
		uni.request({
			url:BASE_URL + options.url,
			method:options.method,
			data:options.data || {},
			success:(response)=>{
				resolve(response)
			},
			fail:(err) => {
				reject(err)
			}
		})
	})
}