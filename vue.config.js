module.exports = {
  configureWebpack: {
      devServer: {
        port: 8888,
        open: true,
        //设置跨域的问题
        proxy: {
          "/api": {
            target: 'http://127.0.0.1:1001/',
            ws: true,
            changOrigin: true,
            pathRewrite: {
              "^/api":"/"
            }
          }
        },
        before(app){
          let userpool = [
            {username: 'jack',password: '1234'},
            {username: 'tom',password: '1234'},
            {username: 'salvatore',password: '1234'}
          ];

          //模拟登录接口
          let tokenKey = "xdclass";
          app.get('/api/login',(req,res)=>{
            const {username,password} = req.query;
            if(username=='jack' && password=='1234' ||
               username=='tom' && password=='1234' ||
               username=='salvatore' && password=='1234'){
              res.json({
                code: 200,
                message: '登录成功',
                token: tokenKey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
              });
            }else{
              res.json({
                code: 500,
                message: '用户名或密码错误'
              })
            }
          });
        }
      }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
