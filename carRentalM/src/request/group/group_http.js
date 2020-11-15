
import req from '../http.js'; 

// 轮播图
export function group() {
    return  req({
        url: '/group?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTNlYTg5YWNjNGY3MDE1MDg4NzBlZiIsImlhdCI6MTYwNDU4NTc2M30.1CViY75fnig8016f2QK2CfBKm7WSzkwL_MBzx_74cbQ',
        method: 'get',
    })
}

