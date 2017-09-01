import axios from 'axios';
import { message } from 'antd';


// 全局默认值
axios.defaults.baseURL = '';
// X-Requested-With、Authorization，Proxy-Authorization
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.timeout = 30000;  // 请求超时设置，不超过 30 秒（半分钟）
axios.defaults.withCredentials = true;  // 跨域设置，允许跨域且携带 Cookie


export default (url, options) => {

  let config = options || {};

  // 请求超过指定的时间；终止请求
  // 访问路径没找到；跳转到 404 页

  axios(url, config)
  .then( (response) => {
    let data = response.data;

    switch (data.status) {
      case 500:
        // 接口内部错误；返回定义的 Status（{status: 500}）；跳转到 500 页
        // TODO:
        return window.location.href = '/500';
        break;
      case 502:
      case 401:
        // 访问间隔超过指定的时间，返回定义的 Status（{status: 502}）；跳转到登录页
        // 无访问权限，返回定义的 Status（{status: 401}）；跳转到登录页
        // TODO:
        return window.location.href = '/login';
        break;
      default:
          // 200
        return data;
    }
  })
  .catch( (error) => {
    // 跨域请求异常；需浏览器设置的，跳转到异常链接
    // 接口返回值异常，比如有删减返回字段；跳转到异常页
    // 请求发出，但是没有收到任何响应，比如接口服务挂了；跳转到异常页
    // TODO:
    return window.location.href = '/error';
  });
};

// https://github.com/mzabriskie/axios
