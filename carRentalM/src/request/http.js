
import axios from 'axios';
// import { config } from 'vue/types/umd';

//请求超时
// axios.defaults.timeout = 10000;

// post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

function getCookie(objName){//获取指定名称的cookie的值 
    var arrStr = document.cookie.split("; "); 
    for (var i = 0; i < arrStr.length; i++) { 
        var temp = arrStr[i].split("="); 
        if (temp[0] == objName){ 
            return decodeURI(temp[1]); 
        }
    } 
}


export default function(config) {
    // instance:就是实例化的axios对象
    const instance = axios.create({
        baseURL: '/api',
        timeout: 2000,
       /*  headers: {
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        } */
    });

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        /* if ( getCookie('token').length != 0){
            config.headers[token] =  getCookie('token');
        } */
        console.log(getCookie('token'));

        config.headers['token'] =  getCookie('token');
        
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response.data;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    return instance(config);
}