
import req from '../http.js'; 

// 轮播图
export function carousel() {
    return  req({
        url: '/carousel?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTNlYTg5YWNjNGY3MDE1MDg4NzBlZiIsImlhdCI6MTYwNDU4NTc2M30.1CViY75fnig8016f2QK2CfBKm7WSzkwL_MBzx_74cbQ',
        method: 'get',
    })
}

// 主页
export function home() {
    return  req({
        url: '/home',
        method: 'get',
    })
}

// 登录
export function login(datas) {
    return  req({
        url: '/login',
        method: 'post',
        data: datas
    })
}
// 注册
export function register(datas) {
    return req({
        url: '/register',
        method: 'post',
        data: datas
    })
}
