import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '人工智能与机器学习基础',
  tagline: '课程资料、实验与在线评测',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: 'https://aiml.temaurinum.moe',
  baseUrl: '/',
  organizationName: 'Intelligent114',
  projectName: 'aiml',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'zh-Hans', locales: ['zh-Hans']},
  presets: [
    [
      'classic',
      {
        docs: {routeBasePath: '/', sidebarPath: './sidebars.ts'},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '人工智能与机器学习基础',
      items: [
        {to: '/', label: '首页', position: 'left'},
        {to: '/schedule/', label: '课程安排', position: 'left'},
        {to: '/assignments/', label: '作业', position: 'left'},
        {to: '/labs/', label: '实验', position: 'left'},
        {
          href: 'https://oj.temaurinum.moe/',
          label: '在线评测',
          position: 'left',
          target: '_self',
        },
        {to: '/cs229/', label: 'Stanford CS229', position: 'left'},
        {
          label: '其他课程',
          position: 'right',
          items: [
            {label: '线性代数', href: 'https://la.temaurinum.moe/'},
            {label: '计算方法', href: 'https://cm.temaurinum.moe/'},
            {label: '主站', href: 'https://temaurinum.moe/'},
          ],
        },
        {href: 'https://github.com/Intelligent114/aiml', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '课程资料',
          items: [
            {label: '课程安排', to: '/schedule/'},
            {label: '作业', to: '/assignments/'},
            {label: '实验', to: '/labs/'},
          ],
        },
        {
          title: '相关站点',
          items: [
            {label: '在线评测', href: 'https://oj.temaurinum.moe/', target: '_self'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Intelligent114 · Built with Docusaurus.`,
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
  } satisfies Preset.ThemeConfig,
};

export default config;
