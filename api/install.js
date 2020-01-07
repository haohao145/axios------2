//把所有的api接口安装到全局，之后我们在main.js文件中导入就可以了
import apiList from './apiList'

const install = function (Vue) {
    if (install.installed) {
        return;
    }
    install.installed = true
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                console.log("调用install中的请求方法")
                return apiList
            }
        }
    })
}
export default {
    install
}
