import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>Zero to One</span>,
  project: {
    link: 'https://github.com/your-org/claude-code-camp',
  },
  docsRepositoryBase: 'https://github.com/your-org/claude-code-camp',
  footer: {
    text: 'Build with Claude Code: Zero to One',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    title: '目次',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: '検索...',
  },
}

export default config
