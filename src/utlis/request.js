import axios from "axios";
// 导出基准地址
export const baseURL = 'http://127.0.0.1:4000'
const instance = axios.create({
  // axios的一些配置，baseURL  timeout
  baseURL,
  timeout: 5000,
})
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
