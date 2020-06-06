// prod.ssr.js
const fs = require('fs');
const path = require('path');

const resolve = file => path.resolve(__dirname, file);

const { createBundleRenderer } = require('vue-server-renderer');
const bundle = require('vue-ssr-server-bundle.json');
const clientManifest = require('vue-ssr-client-manifest.json');
const renderer = createBundleRenderer(bundle, {
    runInNewContext: false,
    template: fs.readFileSync(resolve('./public/index.html'), 'utf-8'),
    clientManifest
});

const renderToString = (context) => {
    return new Promise((resolve, reject) => {
        renderer.renderToString(context, (err, html) => {
            err ? reject(err) : resolve(html);
        });
    });
};


express.get('/test',async (req,res)=>{
    console.log('url:',req.url);

    try {
            let html = await renderToString({url:req.url});
            res.send(html);
        } catch(err) {
            console.log(err);
            res.status(500).end('服务器错误')
        }
});



let port = 8088;
express.listen(port,()=>{
    console.log('服务器已经启动！','port ',port)
})


