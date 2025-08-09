// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tài liệu HisPro BVXA',
  tagline: 'Tài liệu hướng dẫn người dùng sử dụng HisPro BVXA',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://bvxa.io.vn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'truongpham2309', // Usually your GitHub org/user name.
  projectName: 'docs-xuyena', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

   headTags: [
    {
      tagName: 'meta',
      attributes: {
        // Algolia Verification
        name: 'algolia-site-verification',
        content: 'B63548352B9E70EF',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
        sidebarPath: './sidebars.js',
        routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },       
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/bvxa-social-card.jpg',
      navbar: {
        title: 'Tài liệu HisPro BVXA',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [          
          { to: 'https://truongit.net/hispro-xuyen-a#cuchi', label: 'Tải HisPro Củ Chi', position: 'left' },
          { to: 'https://truongit.net/hispro-xuyen-a#vinhlong', label: 'Tải HisPro Vĩnh Long', position: 'left' },
          { to: 'https://truongit.net/hispro-xuyen-a#tayninh', label: 'Tải HisPro Tây Ninh', position: 'left' },
          { to: 'https://truongit.net/hispro-xuyen-a#longan', label: 'Tải HisPro Long An', position: 'left' },
//          {
//            href: 'https://github.com/facebook/docusaurus',
//            label: 'GitHub',
//           position: 'right',
//          },
        ],
     },
      footer: {
        style: 'dark',        
        copyright: `Copyright © ${new Date().getFullYear()} Xuyen A Hospital, Inc — Developed by IT Xuyen A Support`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
      appId: 'WOYHYEZWK3',
      apiKey: '740814dd1453fa72ad9905adf8589178',
      indexName: 'bvxa-io',
      contextualSearch: true,
      },
    }),
};

export default config;
