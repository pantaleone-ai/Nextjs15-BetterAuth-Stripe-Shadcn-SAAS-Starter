import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ className, ...props }) => (<h1 className={cn('mt-2 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text', className)} {...props} />),
    h2: ({ className, ...props }) => (<h2 className={cn('mt-12 scroll-m-20 border-b border-border pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4', className)} {...props} />),
    p: ({ className, ...props }) => (<p className={cn('leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground', className)} {...props} />),
    a: ({ className, ...props }) => (<a className={cn('font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors', className)} {...props} />),
    ...components,
  }
}
