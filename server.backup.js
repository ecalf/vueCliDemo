const Vue = require('vue')
//const Vue = require('./src/utils/enhanceVue');
const fs = require('fs')
const express = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync('./ssr.template.html', 'utf-8')
});





express.get('/',(req,res)=>{
    console.log('url:',req.url);
    //console.log(req.headers);

    /*const app = new Vue({
        template:'<div>hello world</div>'
    });*/

    const createApp = require('./src/pages/test/test_server');
    const app = createApp();

    renderer.renderToString(app,(err,html)=>{
        res.setHeader("Content-Type", "text/html;charset=utf-8"); 

        if(err){
            console.log('=====err=========');
            console.log(err);

            return res.status(500).end('服务器错误')
        }else{
            res.send(html);
        }
        
    });
})

let port = 8088;
express.listen(port,()=>{
    console.log('服务器已经启动！','port ',port)
})