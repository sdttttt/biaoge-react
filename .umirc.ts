import { IConfig } from 'umi-types'; // ref: https://umijs.org/config/

const config: IConfig = {
  proxy: {
    "/apiapi": {
      target: "http://www.4399.com/",
      pathRewrite: { '^/apiapi': '' },
      changeOrigin: true
    }
  },
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/register',
          component: './register',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'biaoge',
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
      },
    ],
  ],
};
export default config;

