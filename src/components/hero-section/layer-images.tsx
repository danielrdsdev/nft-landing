import { Icons } from '@/components/icons'
import { MotionDiv } from '@/components/providers/motion'
import { fade, fadeScale } from '@/lib/animations'
import Image from 'next/image'

export const LayerImages = () => {
	return (
		<>
			<MotionDiv
				{...fadeScale}
				transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
				className="absolute left-0 top-0 h-[152px] w-[143px] sm:h-[271px] sm:w-[271px]"
			>
				<Image
					src="/layers/art_01.png"
					alt="Art 01"
					fill
					sizes="100%"
					unoptimized
					priority
				/>
			</MotionDiv>

			<MotionDiv
				{...fadeScale}
				transition={{
					duration: 0.3,
					delay: 0.3,
					type: 'spring',
					stiffness: 200,
				}}
				className="absolute bottom-0 right-0 h-[152px] w-[143px] sm:h-[271px] sm:w-[271px]"
			>
				<Image
					src="/layers/art_03.png"
					alt="Art 01"
					fill
					sizes="100%"
					unoptimized
					priority
				/>

				<div className="absolute left-3 top-2 -z-10 h-[152px] w-[143px] -rotate-[10deg] rounded-[48px] border sm:left-8 sm:top-8 sm:h-[240px] sm:w-[240px]" />
			</MotionDiv>

			<MotionDiv
				{...fade}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="absolute bottom-[10%] -translate-y-[10%]"
			>
				<Icons.heroCircle01 />
			</MotionDiv>

			<MotionDiv
				{...fade}
				transition={{ duration: 0.5, delay: 0.8 }}
				className="absolute right-[20%] top-0 -translate-x-[20%]"
			>
				<Icons.heroCircle02 />
			</MotionDiv>
		</>
	)
}
