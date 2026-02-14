import { Head } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Build with Claude Code: Zero to One',
  description: 'A Hands-On Workshop for Everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="🚀" />
      <body>
        {children}
      </body>
    </html>
  )
}
