import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import type { MDXComponents } from 'mdx/types'

const themeComponents = getDocsMDXComponents()

export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...themeComponents,
    ...components,
  }
}
