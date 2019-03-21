const path = require('path')
//启用热更新 第2步
const webpack = require('webpack')
//导入在内存中生成的html页面的插件
//只要是插件都一定要放到plugins节点中去
// 1.自动在内存中根据指定页面生成了一个内存的页面
// 2.自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            //指定模板页面,将来会根据指定的页面路径,去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [{
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'
            }, // 处理 图片路径的 loader
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            }, // 处理 字体文件的 loader 
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, // 配置 Babel 来转换高级的ES语法
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: /node_modules/
            }
        ],

    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },

}