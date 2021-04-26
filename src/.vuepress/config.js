const {
  description
} = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "আরবী পাঠশালা",
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
    [
      "meta",
      {
        name: "theme-color",
        content: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/assets/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/assets/favicons/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/favicons/safari-pinned-tab.svg",
        color: "#3a0839",
      },
    ],
    [
      "link",
      {
        rel: "shortcut icon",
        href: "/assets/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#3a0839",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-config",
        content: "/assets/favicons/browserconfig.xml",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-L13KY2F273",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-L13KY2F273');
  `,
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nextLinks: false,
    prevLinks: false,
    nav: [],
    sidebar: [

      "/guide/",
      {
        title: "النَّحْو নাহু",
        path: "/guide/nahw/",
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "كَلِمَة কালিমাহ (শব্দ)",
            collapsable: false,
            initialOpenGroupIndex: -1,
            path: "/guide/nahw/kalimah",
            children: [
              {
                title: "اسْم ইসম",
                path: "/guide/nahw/ism",
                collapsable: true,
                initialOpenGroupIndex: -1,
                children: [
                  {
                    title: "جنس تذكير أو تأنيث বা লিঙ্গ",
                    path: "/guide/nahw/ism_tadhkir_taanis",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/ism_mudhakkar",
                      "/guide/nahw/ism_muannas"
                    ],
                  },
                  {
                    title: "النَّكِرَةُ أو الْمَعْرِفَةُ বা নির্দিষ্টতা",
                    path: "/guide/nahw/marifa_nakira",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/nakirah",
                      "/guide/nahw/marifah"
                    ],
                  },
                  {
                    title: "عدد বচন",
                    path: "/guide/nahw/adad",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/mufrad",
                      "/guide/nahw/muthanna",
                      "/guide/nahw/jame"
                    ],
                  },
                  {
                    title: "إعراب (إسم) ইরাব (ইসম) বা কারক",
                    path: "/guide/nahw/ism_irab",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "مَرْفُوع / رَفْع (إسم) রফা / মারফু (ইসম) বা কর্তৃকারক",
                        path: "/guide/nahw/ism_marfu",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(إسم) علامات الرفع মারফু ইসমের আলামত সমূহ ",
                            path: "/guide/nahw/ism_alamatul_rafa",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_rafa_dammah",
                              "/guide/nahw/alamatul_rafa_waw",
                              "/guide/nahw/alamatul_rafa_alif",
                              "/guide/nahw/alamatul_rafa_nun",
                            ],
                          },
                          {
                            title: "مرفوعات মারফু ইসম সমূহ",
                            path: "/guide/nahw/marfuaat",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/fail",
                              "/guide/nahw/naib_fail",
                              "/guide/nahw/mubtada",
                              "/guide/nahw/khabar",
                              "/guide/nahw/ism_kaana_wa_akhawatiha",
                              "/guide/nahw/khabar_inna_wa_akhawatiha",
                              "/guide/nahw/ism_ma_la_mutashabihain_bi_laisa",
                              "/guide/nahw/khabar_la_nafia_jins",
                            ],
                          },
                        ],
                      },
                      {
                        title: "(إسم) مَنصوب / نَصْب নসব / মানসুব  (ইসম) বা কর্মকারক",
                        path: "/guide/nahw/ism_mansub",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(إسم) علامات النصب মানসুব  ইসমের আলামত সমূহ",
                            path: "/guide/nahw/ism_alamatul_nasb",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_nasb_fathah",
                              "/guide/nahw/alamatul_nasb_ya",
                              "/guide/nahw/alamatul_nasb_alif",
                              "/guide/nahw/alamatul_nasb_kasrah",
                              "/guide/nahw/alamatul_nasb_hadhf_nun",
                            ],
                          },
                          {
                            title: "منصوبات মানসুব ইসম সমূহ ",
                            path: "/guide/nahw/mansubaat",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/maful_bihi",
                              "/guide/nahw/maful_mutlaq",
                              "/guide/nahw/maful_fihi",
                              "/guide/nahw/maful_lahu",
                              "/guide/nahw/maful_maahu",
                              "/guide/nahw/haal",
                              "/guide/nahw/tamyiz",
                              "/guide/nahw/mustathna",
                              "/guide/nahw/khabar_kaana_wa_akhawatiha",
                              "/guide/nahw/ism_inna_wa_akhawatiha",
                              "/guide/nahw/ism_khabar_janna_wa_akhawatiha",
                              "/guide/nahw/khabar_ma_la_mutashabihain_bi_laisa",
                              "/guide/nahw/ism_la_nafia_jins",
                              "/guide/nahw/munada",
                            ],
                          },
                        ],
                      },
                      {
                        title: "مخفوض / خَفْض / مَجرور / جَرّ জার / মাজরুর / খফদ / মাখফুদ (ইসম) বা করণকারক ",
                        path: "/guide/nahw/ism_majrur",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(إسم) علامات الجرّ মাজরুর ইসমের আলামত সমূহ",
                            path: "/guide/nahw/ism_alamatul_jarr",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_jarr_fathah",
                              "/guide/nahw/alamatul_jarr_ya",
                              "/guide/nahw/alamatul_jarr_kasrah",
                            ],
                          },
                          {
                            title: "مجرورات মাজরুর ইসম সমূহ",
                            path: "/guide/nahw/majruraat",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/majrur",
                              "/guide/nahw/mudaf_ilaihi",
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                title: "فِعْل ফেয়ল",
                path: "/guide/nahw/fel",
                collapsable: true,
                initialOpenGroupIndex: -1,
                children: [
                  {
                    title: "زَمَن الفِعْل ক্রিয়ার কাল",
                    path: "/guide/nahw/fel_zaman",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/madi",
                      "/guide/nahw/mudaria",
                      "/guide/nahw/amr"
                    ],
                  },
                  {
                    title: "إعراب (فِعْل) ইরাব (ফেয়ল)",
                    path: "/guide/nahw/fel_irab",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "مَرْفُوع / رَفْع (فِعْل) রফা / মারফু (ফেল)",
                        path: "/guide/nahw/fel_marfu",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(فِعْل) علامات الرفع মারফু ফেয়লের আলামত সমূহ  ",
                            path: "/guide/nahw/fel_alamatul_rafa",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_rafa_dammah",
                              "/guide/nahw/alamatul_rafa_nun",
                            ],
                          },
                        ],
                      },
                      {
                        title: "(فِعْل) مَنصوب / نَصْب নসব / মানসুব (ফেয়ল)",
                        path: "/guide/nahw/fel_mansub",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(فِعْل) علامات النصب মানসুব ফেয়লের আলামত সমূহ",
                            path: "/guide/nahw/fel_alamatul_nasb",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_nasb_fathah",
                              "/guide/nahw/alamatul_nasb_hadhf_nun",
                            ],
                          },
                          "/guide/nahw/nawasib",
                        ],
                      },
                      {
                        title: "(فِعْل) مَجْزُوم / جزم জজম / মাজজুম (ফেয়ল)",
                        path: "/guide/nahw/fel_majzum",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          {
                            title: "(فِعْل) علامات الجرّ মাজজুম ফেয়লের আলামত সমূহ",
                            path: "/guide/nahw/fel_alamatul_jazm",
                            collapsable: true,
                            initialOpenGroupIndex: -1,
                            children: [
                              "/guide/nahw/alamatul_jazm_sukoon",
                              "/guide/nahw/alamatul_jazm_hadhf",
                            ],
                          },
                          "/guide/nahw/jawazim",
                        ],
                      },
                    ],
                  },
                  {
                    title: "مثبت و منفی ইতিবাচক ও নেতিবাচক",
                    path: "/guide/nahw/muthbat_manfi",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/muthbat",
                      "/guide/nahw/manfi",
                    ],
                  },
                  {
                    title: "(فِعْل) جنس تذكير أو تأنيث বা লিঙ্গ",
                    path: "/guide/nahw/fel_tadhkir_taanis",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/fel_mudhakkar",
                      "/guide/nahw/fel_muannas",
                    ],
                  },
                  {
                    title: "و معروف‎ مَجْهُول বাচ্য",
                    path: "/guide/nahw/maruf_majhul",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      "/guide/nahw/maruf",
                      "/guide/nahw/majhul",
                    ],
                  },
                ],
              },
              "/guide/nahw/harf"
            ],
          }, 
          {
            title: "إعراب ইরাব",
            path: "/guide/nahw/irab",
            collapsable: true,
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "أنواع الإعراب ইরাবের প্রকার",
                path: "/guide/nahw/anwanul_irab",
                collapsable: true,
                initialOpenGroupIndex: -1,
                children: [
                  {
                    title: "مَرْفُوع / رَفْع  রফা / মারফু",
                    path: "/guide/nahw/rafa",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "علامات الرفع রফার আলামত সমূহ",
                        path: "/guide/nahw/alamatul_rafa",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/alamatul_rafa_dammah",
                          "/guide/nahw/alamatul_rafa_waw",
                          "/guide/nahw/alamatul_rafa_alif",
                          "/guide/nahw/alamatul_rafa_nun",
                        ],
                      },
                      {
                        title: "مرفوعات মারফু ইসম সমূহ",
                        path: "/guide/nahw/marfuaat",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/fail",
                          "/guide/nahw/naib_fail",
                          "/guide/nahw/mubtada",
                          "/guide/nahw/khabar",
                          "/guide/nahw/ism_kaana_wa_akhawatiha",
                          "/guide/nahw/khabar_inna_wa_akhawatiha",
                          "/guide/nahw/ism_ma_la_mutashabihain_bi_laisa",
                          "/guide/nahw/khabar_la_nafia_jins",
                        ],
                      },
                    ],
                  },
                  {
                    title: "مَنصوب / نَصْب নসব / মানসুব",
                    path: "/guide/nahw/nasb",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "علامات النصب নসবের আলামত সমূহ",
                        path: "/guide/nahw/alamatul_nasb",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/alamatul_nasb_fathah",
                          "/guide/nahw/alamatul_nasb_ya",
                          "/guide/nahw/alamatul_nasb_alif",
                          "/guide/nahw/alamatul_nasb_kasrah",
                          "/guide/nahw/alamatul_nasb_hadhf_nun",
                        ],
                      },
                      {
                        title: "منصوبات মানসুব ইসম সমূহ ",
                        path: "/guide/nahw/mansubaat",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/maful_bihi",
                          "/guide/nahw/maful_mutlaq",
                          "/guide/nahw/maful_fihi",
                          "/guide/nahw/maful_lahu",
                          "/guide/nahw/maful_maahu",
                          "/guide/nahw/haal",
                          "/guide/nahw/tamyiz",
                          "/guide/nahw/mustathna",
                          "/guide/nahw/khabar_kaana_wa_akhawatiha",
                          "/guide/nahw/ism_inna_wa_akhawatiha",
                          "/guide/nahw/ism_khabar_janna_wa_akhawatiha",
                          "/guide/nahw/khabar_ma_la_mutashabihain_bi_laisa",
                          "/guide/nahw/ism_la_nafia_jins",
                          "/guide/nahw/munada",
                        ],
                      },
                      "/guide/nahw/nawasib"
                    ],
                  },
                  {
                    title: "مخفوض / خَفْض / مَجرور / جَرّ জার / মাজরুর / খফদ / মাখফুদ",
                    path: "/guide/nahw/jarr",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "علامات الجرّ জারের আলামত সমূহ",
                        path: "/guide/nahw/alamatul_jarr",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/alamatul_jarr_fathah",
                          "/guide/nahw/alamatul_jarr_ya",
                          "/guide/nahw/alamatul_jarr_kasrah",
                        ],
                      },
                      {
                        title: "مجرورات মাজরুর ইসম সমূহ",
                        path: "/guide/nahw/majruraat",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/majrur",
                          "/guide/nahw/mudaf_ilaihi",
                        ],
                      },
                    ],
                  },
                  {
                    title: "مَجْزُوم / جزم জজম / মাজজুম",
                    path: "/guide/nahw/jazm",
                    collapsable: true,
                    initialOpenGroupIndex: -1,
                    children: [
                      {
                        title: "علامات الجَزْمِ জজমের আলামত সমূহ",
                        path: "/guide/nahw/alamatul_jazm",
                        collapsable: true,
                        initialOpenGroupIndex: -1,
                        children: [
                          "/guide/nahw/alamatul_jazm_sukoon",
                          "/guide/nahw/alamatul_jazm_hadhf",
                        ],
                      },
                      "/guide/nahw/jawazim",
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "الصَّرْف সরফ",
        path: "/guide/sarf/",
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [],
      },
      {
        title: "البَلَاغَة‎ বালাগাত",
        path: "/guide/balagah/",
        collapsable: true,
        initialOpenGroupIndex: -1,
        children: [],
      },
      "/guide/reference",
    ],

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      'sitemap', {
        hostname: 'https://arbipathshala.com/'
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "caution",
        defaultTitle: "সতর্কতা",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "suggestion",
        defaultTitle: "পরামর্শ",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "easydef",
        defaultTitle: "সহজ সংজ্ঞা",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "harddef",
        defaultTitle: "পুঁথিগত সংজ্ঞা",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "quranic_example",
        defaultTitle: "কুরআন থেকে উদাহরণ",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "modern_example",
        defaultTitle: "আধুনিক উদাহরণ",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "common_example",
        defaultTitle: "উদাহরণ",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "rule",
        defaultTitle: "নিয়ম",
      },
    ],
    [
      "vuepress-plugin-container",
      {
        type: "info",
        defaultTitle: "তথ্য",
      },
    ],
  ],
};