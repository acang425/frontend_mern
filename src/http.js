import axios from 'axios';

const isDev = process.env.NODE_ENV === 'development'; // 判断是否为生产环境

const service = axios.create({
    baseURL: isDev ? 'http://rap2.taobao.org:38080/app/mock/251246' : ''
});

// 请求拦截
service.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token');
    if (!token) {
        // 没有token，拦截请求，跳转到登录页面
        console.log('请重新登陆'); // 打印请求参数
        window.location.href = '/'; // 修改为实际的登录页地址
        

    } else {
        console.log('请求参数：', config.data); // 打印请求参数
    }
    return config;
});

// 响应拦截

// service.interceptors.response.use(
//   (resp) => {
//     if (resp.data.code === 200) {
//         return resp.data
//     } else {
//       // 全局处理错误
//       return Promise.reject(resp.data.errMsg);
//     }
//   },
//   (error) => {
//     // 处理请求错误
//     // ...
//     throw error;
//   }
// );


export default service;

