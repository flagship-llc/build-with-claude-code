import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

export default withNextra({
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ja',
        permanent: true,
      },
    ]
  },
})
