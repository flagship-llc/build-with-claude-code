import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import { LanguageSwitcher } from '../../components/LanguageSwitcher'

const logo = (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img src="/logo.svg" alt="0 → 1" style={{ height: '28px' }} />
    <span style={{ fontWeight: 700, fontSize: '14px' }}>Zero to One</span>
  </div>
)

const footer = (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
    <a href="https://flagship.cc/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Flagship Inc.</a>
    <span style={{ fontSize: '12px', color: '#666' }}>Made in Tokyo / Built with Claude</span>
  </div>
)

export default async function EnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap('/en')

  return (
    <Layout
      pageMap={pageMap}
      docsRepositoryBase="https://github.com/flagship-llc/build-with-claude-code/blob/main/docs-site"
      sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
      toc={{ title: 'On This Page' }}
      navbar={<Navbar logo={logo} projectLink="https://github.com/flagship-llc/build-with-claude-code" />}
      footer={<Footer>{footer}</Footer>}
    >
      {children}
      <LanguageSwitcher />
    </Layout>
  )
}
