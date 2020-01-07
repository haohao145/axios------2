//引入封装好的  axios 请求方法
import api from '../index'

//引入罗列接口的文件
import Interface from './interface'

//有些接口需要在header中添加token或是其他
const header = {}

//导出罗列的请求  这里定义请求使用的方法  备注请求的内容    
export default {
    //请求路由表     
    axiosNav(params) {
        // return出去了一个promise
        return api.get(Interface.axiosNav, params, header)
    },
    //登录     
    axiosLogin(params) {
        // return出去了一个promise
        return api.post(Interface.axiosLogin, params, header)
    },
    //请求验证码
    axiosYzm(params) {
        return api.get(Interface.axiosYzm, params, header)
    }

}
