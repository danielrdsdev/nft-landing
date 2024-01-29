import { MotionDiv } from '@/components/providers/motion'
import { fade } from '@/lib/animations'
import Image from 'next/image'

export const LayerImages = () => {
	return (
		<>
			<MotionDiv
				{...fade}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="absolute -top-[26px] right-[75px] lg:-top-[38px] lg:right-[285px]"
			>
				<div className="relative h-6 w-6">
					<Image
						src="/layers/ethereum-01.png"
						alt="bitcoin"
						fill
						sizes="100%"
						className="object-contain"
						unoptimized
					/>
				</div>
			</MotionDiv>
			<MotionDiv
				{...fade}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="absolute -bottom-[69px] left-[51px] lg:-bottom-[49px] lg:left-[375px]"
			>
				<div className="relative h-8 w-8">
					<Image
						src="/layers/bitcoin-01.png"
						alt="bitcoin"
						fill
						sizes="100%"
						className="object-contain"
						unoptimized
					/>
				</div>
			</MotionDiv>
		</>
	)
}
