// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'WeatherForChrome',
      dll: false,

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  copy: [{
    from: 'manifest.json',
    to: 'manifest.json',
    toType: 'file',
  }, {
    from: 'src/background.js',
    to: 'background.js',
    toType: 'file',
  }, {
    from: 'src/assets/manifest/*',
    to: 'static/[name].[ext]',
    toType: 'template',
  }, {
    from: 'src/assets/weather/png/*',
    to: 'static/[name].[ext]',
    toType: 'template',
  }],
};
