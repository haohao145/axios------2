//判断 当前环境  设置请求位置
let baseUrl = '/proxyApi' // 本地代理

switch (process.env.NODE_ENV) {
    // case 'development':
    //     baseUrl = 'http://10.0.111.24:9012/api' // 开发环境url
    //     break
    // case 'pre':
    //     baseUrl = 'https://pre-server.feleti.cn' // 预上线环境url
    //     break
    case 'production':
        baseUrl = 'https://api.feleti.cn' // 生产环境url
        break
}

export default baseUrl
