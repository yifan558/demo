module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        proxy:{
            '/api': {
                target:'http://localhost:9000',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    },
    configureWebpack: {
        externals: {
          'AMap': 'AMap' // 高德地图配置
        }
    }
}
