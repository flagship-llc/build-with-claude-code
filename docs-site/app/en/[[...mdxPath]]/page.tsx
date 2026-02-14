import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'

export async function generateStaticParams() {
  const allParams = await generateStaticParamsFor('mdxPath')()
  return allParams
    .filter((p: { mdxPath?: string[] }) => p.mdxPath?.[0] === 'en')
    .map((p: { mdxPath?: string[] }) => ({
      mdxPath: p.mdxPath?.slice(1)
    }))
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(['en', ...(params.mdxPath || [])])
  return metadata
}

type PageProps = {
  params: Promise<{ mdxPath?: string[] }>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata } = await importPage(['en', ...(params.mdxPath || [])])
  const { wrapper: Wrapper } = useMDXComponents() as Record<string, React.FC<any>>
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
