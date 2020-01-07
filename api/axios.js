//创建axios实例  配置拦截器
import axios from 'axios'

// 创建 axios 实例  默认项的自定义配置
let service = axios.create({
    // headers: {'Content-Type': 'application/json'},
    timeout: 60000
})

// 设置 post、put 默认 Content-Type  请求头
service.defaults.headers.post['Content-Type'] = 'application/json'
service.defaults.headers.put['Content-Type'] = 'application/json'

// 添加请求拦截器
service.interceptors.request.use(
    (config) => {
        if (config.method === 'post' || config.method === 'put') {
            // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
            config.data = JSON.stringify(config.data)
        }

        // 请求发送前进行处理  处理数据
        return config
    },
    (error) => {
        // 请求错误处理
        return Promise.reject("请求前拦截错误：" + error)
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {

        let {
            data
        } = response
        // console.log(response)
        return data

    },
    (error) => {
        console.log("请求在响应阶段被拦截了，请求失败")
        let info = {},
            {
                status,
                statusText,
                data
            } = error.response

        if (!error.response) {
            info = {
                code: 5000,
                msg: 'Network Error'
            }
        } else {
            // 此处整理错误信息格式
            info = {
                code: status + "111",
                data: data,
                msg: statusText + "111"
            }
        }
    }
)


// 创建统一封装过的 axios 实例   @return {AxiosInstance}


export default function () {
    return service
}
