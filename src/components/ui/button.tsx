import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'text-foreground dark:ring-offset-foreground dark:focus-visible:ring-foreground inline-flex h-16 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-lg font-bold ring-offset-white transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button }
