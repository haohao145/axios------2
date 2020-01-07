//引入默认的请求地址 头  如 http:192.168.11:8080/api 接口地址  
import baseUrl from '../baseUrl'
//罗列所有 数据接口  也可以按照模块 分文件引入
export default {
    //请求路由表  信息
    axiosNav: baseUrl + '/sys/menu/nav',
    //登录
    axiosLogin: baseUrl + '/sys/login',
    //验证码
    axiosYzm: baseUrl + 'captcha.jpg'
}
