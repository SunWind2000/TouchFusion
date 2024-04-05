import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/touch-fusion/',
  title: "TouchFusion",
  description: "多端触摸手势识别TS工具库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/quick-start' },
      { text: 'Development', link: '/development/'}
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
          { text: 'Pinch 缩放', link: '/guide/recognizer/pinch' },
          { text: 'Rotate 旋转', link: '/guide/recognizer/rotate' },
          { text: 'Swipe 滑动', link: '/guide/recognizer/swipe' },
          { text: 'Tap 点击', link: '/guide/recognizer/tap' },
        ]
      },
      {
        text: '常量说明',
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
