import router from "@/router";
import axios from "axios";
axios.defaults.baseURL = 'http://127.0.0.1:8080/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 判断是否存在token,如果存在将每个页面header添加token
    if (window.sessionStorage.getItem("token")) {
      config.headers.Authorization = window.sessionStorage.getItem("token");
      alert("拦截成功")
    }
    return config
  }, 
    function (error) {//当前端有错误的时候，几乎不存在
    router.push('/login')
    return Promise.reject(error)
  })
export default axios;