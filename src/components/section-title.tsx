import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

type SectionTitleProps = ComponentProps<'h3'> & {
  titlePrimary: string
  titleSecondary: string
  className?: string
}
export const SectionTitle = ({
  titlePrimary,
  titleSecondary,
  className,
  ...props
}: SectionTitleProps) => {
  return (
    <h3 {...props} className={cn('text-center text-6xl font-bold', className)}>
      {titlePrimary}{' '}
      <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
        {titleSecondary}
      </span>
    </h3>
  )
}
