import { fade } from '@/lib/animations'
import { cn } from '@/lib/utils'
import { MotionH3 } from './providers/motion'

type SectionTitleProps = {
	titlePrimary: string
	titleSecondary: string
	className?: string
}
export const SectionTitle = ({
	titlePrimary,
	titleSecondary,
	className,
}: SectionTitleProps) => {
	return (
		<MotionH3
			{...fade}
			transition={{ duration: 0.5, delay: 0.2 }}
			className={cn('text-center text-4xl font-bold lg:text-6xl', className)}
		>
			{titlePrimary}{' '}
			<span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
				{titleSecondary}
			</span>
		</MotionH3>
	)
}
