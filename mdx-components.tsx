import React from 'react'
import { cn } from '@/lib/utils'

// Define MDX component types
type MDXComponents = {
  [key: string]: React.ComponentType<any>
  h1?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  h2?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  h3?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  h4?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  h5?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  h6?: React.ComponentType<React.HTMLAttributes<HTMLHeadingElement>>
  p?: React.ComponentType<React.HTMLAttributes<HTMLParagraphElement>>
  a?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>
  ul?: React.ComponentType<React.HTMLAttributes<HTMLUListElement>>
  ol?: React.ComponentType<React.HTMLAttributes<HTMLOListElement>>
  li?: React.ComponentType<React.LiHTMLAttributes<HTMLLIElement>>
  blockquote?: React.ComponentType<React.BlockquoteHTMLAttributes<HTMLQuoteElement>>
  code?: React.ComponentType<React.HTMLAttributes<HTMLElement>>
  pre?: React.ComponentType<React.HTMLAttributes<HTMLPreElement>>
  img?: React.ComponentType<React.ImgHTMLAttributes<HTMLImageElement>>
  hr?: React.ComponentType<React.HTMLAttributes<HTMLHRElement>>
  table?: React.ComponentType<React.TableHTMLAttributes<HTMLTableElement>>
  thead?: React.ComponentType<React.HTMLAttributes<HTMLTableSectionElement>>
  tbody?: React.ComponentType<React.HTMLAttributes<HTMLTableSectionElement>>
  tr?: React.ComponentType<React.HTMLAttributes<HTMLTableRowElement>>
  th?: React.ComponentType<React.ThHTMLAttributes<HTMLTableHeaderCellElement>>
  td?: React.ComponentType<React.TdHTMLAttributes<HTMLTableDataCellElement>>
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom MDX components with Tailwind styling
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4",
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-4",
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-semibold tracking-tight mb-4",
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          "scroll-m-20 text-xl font-semibold tracking-tight mb-4",
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          "scroll-m-20 text-lg font-semibold tracking-tight mb-3",
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          "scroll-m-20 text-base font-semibold tracking-tight mb-3",
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
          className
        )}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
    ),
    ol: ({ className, ...props }) => (
      <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("mt-2", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 dark:bg-zinc-900 py-4 px-4",
          className
        )}
        {...props}
      />
    ),
    img: ({ className, ...props }) => (
      <img
        className={cn("rounded-lg border shadow-md", className)}
        {...props}
      />
    ),
    hr: ({ className, ...props }) => (
      <hr className={cn("my-8 border-border", className)} {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead className={cn("[&_tr]:border-b", className)} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn("border-b transition-colors hover:bg-muted/50", className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      />
    ),
    ...components,
  }
}
