import { fadeRight } from '@/lib/animations'
import { Icons } from './icons'
import { MotionDiv } from './providers/motion'

export const Divider = () => {
	return (
		<MotionDiv
			{...fadeRight}
			transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
			className="flex items-center justify-center py-8"
		>
			<Icons.divider />
		</MotionDiv>
	)
}
