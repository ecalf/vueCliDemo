const glob = require('glob');
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
//const merge = require('lodash.merge');
const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const isPro = process.env.NODE_ENV !== 'development';
const debug = process.env.NODE_ENV !== "production";
const entryType = TARGET_NODE ? 'server' : 'client';

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
      path: path.join(__dirname, dict, name + '-'+entryType+'.js')
    }
  });

  return pages;
}

function getPagesConfig(pagesInfo) {//form backup
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


console.log(pageConfig);

module.exports = {
    lintOnSave: true,
    //pages: pageConfig.pages,

    /**
     * 静态资源在请求时，如果请求路径为相对路径，则会基于当前域名进行访问
     * 在本地开发时，为保证静态资源的正常加载，在Node 服务8080端口启动一个静态资源服务器
     */
    publicPath: isPro ? '/' : 'http://127.0.0.1:8080/',
    outputDir: 'dist',
    pages: {
        index: {
            entry: `src/pages/test/test-${entryType}.js`,
            template: 'public/index.html',
            filename: `test.html`,
            title: '测试页面',
            chunks: ["chunk-vendors", "chunk-common", 'pages/test']
        }
    },
    css: {
        extract: isPro ? true : false,


        loaderOptions: {//form backup
            scss: { // 全局引入 variables.scss 
                prependData: `@import "@/assets/css/variables.scss";`
            }
        }
    },
    chainWebpack: (config) => {
        // 添加别名,form backup
        config.resolve.alias
          .set("@src", resolve("src"))
          .set("@pages",resolve("src/pages"))
          .set("@assets", resolve("src/assets"))
          .set("@components", resolve("src/components"))
          .set("@utils", resolve("src/utils"))
          .set("@lang", resolve("src/lang"))
          .set("@api", resolve("src/api"));

        // 关闭vue-loader中默认的服务器端渲染函数
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                /*merge(options, {
                    optimizeSSR: false,
                });*/
                Object.assign(options, {
                    optimizeSSR: false,
                })
            });
    },
    configureWebpack: {
        entry: pageConfig.entry,//form backup

        // 需要开启source-map文件映射，因为服务器端在渲染时，
        // 会通过Bundle中的map文件映射关系进行文件的查询
        devtool: 'source-map',
        // 服务器端在Node环境中运行，需要打包为类Node.js环境可用包（使用Node.js require加载chunk）
        // 客户端在浏览器中运行，需要打包为类浏览器环境里可用包
        target: TARGET_NODE ? 'node' : 'web',
        // 关闭对node变量、模块的polyfill
        node: TARGET_NODE ? undefined : false,
        output: {
            // 配置模块的暴露方式，服务器端采用module.exports的方式，客户端采用默认的var变量方式
            libraryTarget: TARGET_NODE ? 'commonjs2' : undefined,
        },
        // 外置化应用程序依赖模块。可以使服务器构建速度更快
        externals: TARGET_NODE ? nodeExternals({
            whitelist: [/\.css$/],
        }) : undefined,
        plugins: [
            // 根据之前配置的环境变量判断打包为客户端/服务器端Bundle
            TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin(),
        ],
    },
};