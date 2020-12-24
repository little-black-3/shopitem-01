module.exports={
    lintOnSave:false,
    devServer:{
        proxy:{
            "/api":{
                target:'http://39.99.186.36',
                changeOrigin:true,
                // pathRewrite:{'^/api':''}
            }
        }
    }
}