import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'

// Strip 'ja' prefix if present (e.g. /ja/day1-setup -> /day1-setup)
function resolvePathSegments(mdxPath?: string[]): string[] | undefined {
  if (mdxPath?.[0] === 'ja') {
    const rest = mdxPath.slice(1)
    return rest.length > 0 ? rest : undefined
  }
  return mdxPath
}

export async function generateStaticParams() {
  const allParams = await generateStaticParamsFor('mdxPath')()
  return allParams.filter((p: { mdxPath?: string[] }) => p.mdxPath?.[0] !== 'en')
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(resolvePathSegments(params.mdxPath))
  return metadata
}

type PageProps = {
  params: Promise<{ mdxPath?: string[] }>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const resolved = resolvePathSegments(params.mdxPath)
  const { default: MDXContent, toc, metadata } = await importPage(resolved)
  const { wrapper: Wrapper } = useMDXComponents() as Record<string, React.FC<any>>
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
