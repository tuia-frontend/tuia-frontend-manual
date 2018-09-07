module.exports = {
  title: '推啊前端白皮书',
  description: 'tuia-frontend-manual',
  base: '/tuia-frontend-manual/',
  dest: './docs',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': './public'
      }
    }
  },
  themeConfig: {
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about' },
      { text: '联系我们', link: '/contact' }
    ],
    // 侧边栏
    sidebar: [
      {
        title: '开发规范',
        collapsable: false,
        children: [
          '/blog/develop/'
        ]
      },
      {
        title: '安全防护',
        collapsable: false,
        children: [
          '/blog/safety/'
        ]
      },
      {
        title: '数据埋点及可视化',
        collapsable: false,
        children: [
          '/blog/visualization/'
        ]
      },
      {
        title: '工具平台',
        collapsable: false,
        children: [
          '/blog/platform/'
        ]
      }
    ]
  }
}