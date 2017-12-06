import vue from 'vue'
import axios from 'axios'
import router from './router';
//查自己电脑的ip配置 命令行输入ipconfig

//发送请求的配置
const axiosIntance = axios.create({
	baseURL:'192.168.42.252:9090',
	headers:{
		//'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
		'Content-Type':'application/json'
		//请求头部的设置，和后台有关，看后台返回的是什么数据
	},
	withCredentials : true, //此处为true时是跨域的确认，为false是取消跨域
	//crossDomain:true: 此属性也是为解决跨域的问题
	timeout:5000, //timeout:是响应超时的时间
});
//响应的配置如下
axiosIntance.interceptors.response.use(
	response => {
		if(response.data.errorcode === 10000){
			//执行逻辑代码
		};
		return response;
	},
	error => {
		if(error){

		}
		return Promise.reject(error)
	}
);

export default axiosIntance;