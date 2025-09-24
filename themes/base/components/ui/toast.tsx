'use client'
import { Toaster as Sonner } from 'sonner'
import { useTheme } from 'next-themes'
import type { ComponentProps } from 'react'

type Theme = 'light' | 'dark' | 'system'

export function Toaster(props: ComponentProps<typeof Sonner>) {
  const { theme = 'system' } = useTheme()
  return (
    <Sonner
      theme={theme as Theme}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
        }
      }}
      {...props}
    />
  )
}
