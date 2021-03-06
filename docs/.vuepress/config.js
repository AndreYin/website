module.exports = {
  title      : 'ElectronForConstruct',
  description: 'A documentation website about the ElectronForContruct tool. Install it now and get the best performances!',
  head       : [
    [ 'link', {
      rel : 'icon',
      href: '/favicon.ico',
    } ],
    [ 'script', { src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' } ],
    [ 'script', {},
      '(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-4966496851511152",  enable_page_level_ads: true });' ],
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav              : [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/intro/',
      },
      {
        text: 'Chat with us!',
        link: 'https://spectrum.chat/electron4construct',
      },
      {
        text: 'Vote for new features',
        link: 'https://electronforconstruct.featureupvote.com',
      },
      {
        text: 'Github',
        link: 'https://github.com/ElectronForConstruct',
      },
      {
        text: 'Found an issue ?',
        link: 'https://github.com/ElectronForConstruct/website/issues',
      },
    ],
    sidebar          : [
      {
        title   : 'Guide',
        children: [
          [ '/intro/', 'Introduction' ],
          [ '/intro/getting-started', 'Getting Started' ],

          [ '/intro/using-the-module', 'Using the module' ],
        ],
      },
      {
        title   : 'Advanced usage',
        children: [
          // ['/advanced/', "Introduction"],
          [ '/advanced/c3-steam', 'Steam integration with Construct 3' ],
        ],
      },
      {
        title   : 'Configuration',
        children: [
          [ '/configuration/', 'Introduction' ],
          [ '/configuration/general', 'General' ],
          [ '/configuration/flags', 'Flags' ],
        ],
      },
      {
        title   : 'Build',
        children: [
          [ '/build/', 'Introduction' ],
          [ '/build/building', 'Building your project' ],
        ],
      },
      {
        title   : 'Plugins',
        children: [
          [ '/plugins/', 'Introduction' ],
          [ '/plugins/using-plugins', 'Using plugins' ],
          [ '/plugins/sdk', 'Using the SDK' ],
          [ '/plugins/available-plugins', 'Available plugins' ],
          [ '/plugins/itch', 'Itch.io plugin' ],
          [ '/plugins/greenworks', 'Greenworks plugin' ],
          [ '/plugins/installer', 'Installer plugin' ],
          [ '/plugins/rich-presence', 'Discord rich presence plugin' ],
        ],
      },
//      {
//        title   : 'FAQ',
//        children: [],
//      },
    ],
  },
  plugins    : [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-85914929-3',
      },
    ],
  ],
};
