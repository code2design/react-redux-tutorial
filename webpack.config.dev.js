import webpack                      from 'webpack';
import path                         from 'path';

export default{
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: [
        'eventsource-polyfill', //necessary for hotreloading with IE
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'src/index') //entry point of the application
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', //note: Physical files are only output by the production build task `npm run bild`
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ],
    module: {
        rules: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
            {test: /(\.css)$/, use: ['style-loader', 'css-loader']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};