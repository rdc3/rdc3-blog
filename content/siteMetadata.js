const siteMetadata = {
  title: 'Rohan D`Cunha',
  author: 'Rohan D`Cunha',
  headerTitle: 'rohandcunha',
  description: 'Software Developer',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://rdcunha.in',
  siteRepo: 'https://github.com/rdc3/rdc3-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'rohan.dcunha3@gmail.com',
  github: 'https://github.com/rdc3/',
  twitter: '',
  spotify: '',
  steam: '',
  linkedin: 'https://www.linkedin.com/in/rohan-d-cunha-62a16815/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
};

module.exports = siteMetadata;
