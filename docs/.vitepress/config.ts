import { defineConfig } from 'vitepress'
import DemoContainer from './components/demo-container'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/touch-fusion/',
  title: "TouchFusion",
  description: "多端触摸手势识别TS工具库",
  markdown: {
    config: (md) => {
      md.use(DemoContainer);
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/guide/quick-start' },
      { text: '开发指南', link: '/development/'},
      { text: '更新日志', link: '/development/changelog'}
    ],

    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '安装与引用', link: '/guide/quick-start' },
        ]
      },
      {
        text: '识别器',
        collapsed: false,
        items: [
          { text: 'Press 长按', link: '/guide/recognizer/press' },
          { text: 'Pan 拖拽', link: '/guide/recognizer/pan' },
          { text: 'Swipe 滑动', link: '/guide/recognizer/swipe' },
          { text: 'Pinch 缩放', link: '/guide/recognizer/pinch' },
          { text: 'Rotate 旋转', link: '/guide/recognizer/rotate' },
          { text: 'Tap 点击', link: '/guide/recognizer/tap' },
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: '常量说明', link: '/guide/constants' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://gitee.com/sunhy-cn/touch-fusion' }
    ],

    lastUpdated: {
      text: 'Last Updated',
    },

    search: {
      provider: 'local'
    }
  }
})
