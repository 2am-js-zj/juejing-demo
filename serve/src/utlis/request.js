import axios from "axios";
import store from "@/store";

// 导出基准地址
export const baseURL = 'http://127.0.0.1:4000'
const instance = axios.create({
  // axios的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000,
})

// 请求拦截器
// instance.interceptors.request.use((config) => {
//   // 拦截业务逻辑
//   // 进行请求配置的修改
//   // 如果本地有token就在头部携带token
//   // 1.获取用户信息对象
//   const { profile } = store.state
//   console.log(profile.token)
//   // 2.判断用户是否有token
//   if (profile.token) {
//     // 3.设置token
//     config.headers.Authorization = `Bearer ${profile.token}`
//   }
//   return config
// }, (err) => {
//   return Promise.reject(err)
// })
// 请求工具函数

export default (url, method, submitData) => {
  // 负责发请求：请求地址，请求方式，提交的数据
  return instance({
    method,
    url,
    // 如果是get请求 需要使用params来传递submitData
    // 如果不是get请求 需要使用data来传递submitData
    // []:submitData 设置一个动态的key，写js表达式，js表达式的执行结果当作key
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
