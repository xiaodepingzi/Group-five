module.exports = {
    configureWebpack:{
        // 配置路径别名
        resolve: {
            alias: {
                views: '@/view',
                components: '@/components',
                assets:'@/assets'
            }
        }
    },
    devServer: {
        //配置代理服务器，解决跨越问题
        proxy: {
            '/api': {
                target: 'http://192.168.1.45:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}