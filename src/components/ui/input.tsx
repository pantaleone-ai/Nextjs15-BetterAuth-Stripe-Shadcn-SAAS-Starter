import * as React from 'react'
import { cn } from '@/lib/utils'
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{ error?: boolean }
const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, error, ...props }, ref) => ( <input type={type} className={cn('flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 hover:border-ring/50 md:text-sm', error && 'border-destructive focus-visible:ring-destructive', className)} ref={ref} {...props} /> ))
Input.displayName = 'Input'
export { Input }
