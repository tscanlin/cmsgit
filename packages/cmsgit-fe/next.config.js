module.exports = {
  webpack: (webpackConfig, { dev }) => {
    webpackConfig.output.publicPath = 'www.cmsgit.com'
    // webpackConfig.module.preLoaders.push({ test: /\.js$/, loader: 'eslint-loader' })
    return webpackConfig
  }
}
