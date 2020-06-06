const glob = require('glob');
const path = require("path");
const debug = process.env.NODE_ENV !== "production";
process.env.DEBUG = debug;

console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
console.log("process.env.DEBUG:", process.env.DEBUG);

function resolve(dir) {
  return path.join(__dirname, dir);
}


//生成项目模块
const getPages = () => {
  const prefix = 'src/pages/';
  const pages = {};

  let res;
  try {
    res = glob(prefix + '/*', {
      sync: true
    });
  } catch (err) {
    console.log('getPages error>>>', err);
  }

  res.forEach(dict => {
    const name = dict.replace(prefix, '');
    if (name.indexOf('components') > -1) {
      return this;
    }

    pages[name] = {
      pageName: name,
      chunkName: `pages/${name}`,
      path: path.join(__dirname, dict, name + '.js')
    }
  });

  return pages;
}

function getPagesConfig(pagesInfo) {
  const pages = {};
  const entry = {};

  for (let pageName in pagesInfo) {
    entry[pagesInfo[pageName].chunkName] = pagesInfo[pageName].path;

    pages[pageName] = {
      entry: pagesInfo[pageName].path,
      template: "./public/index.html",
      filename: `${pageName}.html`,
      title: '万和采购平台',
      chunks: ["chunk-vendors", "chunk-common", pagesInfo[pageName].chunkName]
    }
  }

  return { pages, entry };
}

const pagesInfo = getPages();
const pageConfig = getPagesConfig(pagesInfo);

console.log('pageConfig>>>', pageConfig);

module.exports = {
  lintOnSave: true,
  pages: pageConfig.pages,

  /*pages: {
    index: {
          entry: "./src/pages/index/index.js", 
          template: "./public/index.html", 
          filename: "index.html", 
          title: '首页',
          chunks: ["chunk-vendors", "chunk-common", "pages/index"]
      },
    account: {
        entry: "./src/pages/account/account.js", 
        template: "./public/index.html", 
        filename: "account.html", 
        title: '用户中心',
        chunks: ["chunk-vendors", "chunk-common", "pages/account"]
    }
      
  },*/

  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set("@src", resolve("src"))
      .set("@pages",resolve("src/pages"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@utils", resolve("src/utils"))
      .set("@lang", resolve("src/lang"))
      .set("@api", resolve("src/api"))

  },
  css: {
    loaderOptions: {
      scss: { // 全局引入 variables.scss 
        prependData: `@import "@/assets/css/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    // 修改脚手架默认webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) {
      // 开发环境配置
    } else {
      // 生产环境配置
    }


    config.entry = pageConfig.entry;

  },


  // devServer: {
  //   /*overlay: { // 让浏览器 overlay 同时显示警告和错误
  //     warnings: true,
  //     errors: true
  //   }//,*/


  //   //host: "localhost",
  //   //port: 8080, // 端口号
  //   //https: false, // https:{type:Boolean}
  //   //open: false, //配置自动启动浏览器
  //   //hotOnly: true, // 热更新
  //   // proxy: 'http://localhost:8080'   // 配置跨域处理,只有一个代理
  //   /*  proxy: { //配置多个跨域
  //       "/api": {
  //           target: "http://172.11.11.11:7071",
  //           changeOrigin: true,
  //           // ws: true,//websocket支持
  //           secure: false,
  //           pathRewrite: {
  //               "^/api": "/"
  //           }
  //       }
  //     }*/
   
  // },
  devServer: { // 本地服务
    // overlay: { // 让浏览器 overlay 同时显示警告和错误
    //   warnings: true,
    //   errors: true
    // },
    // open: true, // 是否打开浏览器
    //host: "localhost",
    //port: "8080", // 代理端口
    // https: false,
    // hotOnly: false, // 热更新
    proxy: {
      '/api2': {
        target: 'http://api.tianapi.com',
        // secure: false,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api2': '/'
        }
      },
      '/api': {
        //target: 'http://api.scm.yiminshijie.com',
        target: 'http://192.168.1.14:8005',
        // secure: false,
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/api.php'
        }
      }
    }
  },

};


