import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'nextra/hooks'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img src="/logo.svg" alt="0 → 1" style={{ height: '28px' }} />
      <span style={{ fontWeight: 700, fontSize: '14px' }}>Zero to One</span>
    </div>
  ),
  project: {
    link: 'https://github.com/flagship-llc/build-with-claude-code',
  },
  docsRepositoryBase: 'https://github.com/flagship-llc/build-with-claude-code',
  footer: {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <span>Flagship Inc.</span>
        <span style={{ fontSize: '12px', color: '#666' }}>Made in Tokyo / Built with Claude</span>
      </div>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    title: '目次',
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: '検索...',
  },
  i18n: [
    { locale: 'ja', name: '日本語' },
    { locale: 'en', name: 'English' },
  ],
}

export default config
