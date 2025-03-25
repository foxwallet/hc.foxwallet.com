// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FoxWallet Help Center',
  tagline: '',
  url: 'https://hc.foxwallet.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FoxWallet', // Usually your GitHub org/user name.
  projectName: 'HelpCenter', // Usually your repo name.
  plugins: [
    [ 
      require.resolve('docusaurus-lunr-search'), 
      { 
        languages: ['en', 'zh'] // language codes
      }
    ],
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            to: '/docs/basic/bookmark',
            from: '/docs/bookmark',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/ethereum')) {
            return [
              existingPath.replace('/docs/ethereum', '/docs/ethereum-advance'),
            ];
          }
          if (existingPath.includes('/docs/filecoin')) {
            return [
              existingPath.replace('/docs/filecoin', '/docs/filecoin-advance'),
            ];
          }
          if (existingPath.includes('/docs/developer/provider')) {
            return [
              existingPath.replace('/docs/developer/provider', '/docs/developer/webview'),
            ];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      zh: {
        label: '中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarCount: 0, 
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'FoxWallet, Fox Wallet, filecoin, ethereum, ipfs, Fox 钱包, 狐狸钱包, 以太坊, Aleo'}],
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'FoxWallet Help Center',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://foxwallet.com/download',
            label: 'Download',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs',
              },
              {
                label: 'Import from filfox',
                to: '/docs/filecoin/import-from-filfox',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/FoxWallet_EN',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/FoxWallet',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/foxwallet',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'FoxWallet',
                href: 'https://foxwallet.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FoxWallet. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
