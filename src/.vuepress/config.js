const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'আরবী পাঠশালা',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['link', {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/assets/apple-touch-icon.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/favicon-32x32.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/assets/favicon-16x16.png"
    }],
    ['link', {
      rel: "manifest",
      href: "/assets/favicons/site.webmanifest"
    }],
    ['link', {
      rel: "mask-icon",
      href: "/assets/favicons/safari-pinned-tab.svg",
      color: "#3a0839"
    }],
    ['link', {
      rel: "shortcut icon",
      href: "/assets/favicon.ico"
    }],
    ['meta', {
      name: "msapplication-TileColor",
      content: "#3a0839"
    }],
    ['meta', {
      name: "msapplication-config",
      content: "/assets/favicons/browserconfig.xml"
    }],
    ['meta', {
      name: "theme-color",
      content: "#ffffff"
    }],
    ['script', {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-L13KY2F273'
    }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L13KY2F273');
  `],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nextLinks: false,
    prevLinks: false,
    nav: [

    ],
    sidebar: [
      '/guide/',
      {
        title: 'النَّحْو নাহু',
        path: '/guide/nahw/',
        collapsable: true,
        initialOpenGroupIndex: 0,
        children: []
      },
      {
        title: 'الصَّرْف সরফ',
        path: '/guide/sarf/',
        collapsable: true,
        initialOpenGroupIndex: 0,
        children: []
      },
      {
        title: 'البَلَاغَة‎ বালাগাত',
        path: '/guide/balagah/',
        collapsable: true,
        initialOpenGroupIndex: 0,
        children: []
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'vuepress-plugin-container',
      {
        type: 'caution',
        defaultTitle: 'সতর্কতা',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'suggestion',
        defaultTitle: 'পরামর্শ',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'easydef',
        defaultTitle: 'সহজ সংজ্ঞা',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'harddef',
        defaultTitle: 'পুঁথিগত সংজ্ঞা',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'example',
        defaultTitle: 'উদাহরণ',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'rule',
        defaultTitle: 'নিয়ম',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        defaultTitle: 'তথ্য',
      },
    ],
  ]
}