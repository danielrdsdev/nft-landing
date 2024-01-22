import { fade, fadeLeft, fadeScale } from '@/lib/animations'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MotionDiv, MotionH3, MotionP, MotionSpan } from '../providers/motion'

type AboutCardProps = {
  aboutImage: string
  aboutTitle: string
  aboutDescription: string
  aboutDescriptionSecondary: string
  aboutLink: string
  index: number
}

export const AboutCard = ({
  aboutImage,
  aboutTitle,
  aboutDescription,
  aboutDescriptionSecondary,
  aboutLink,
  index,
}: AboutCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 lg:flex-row lg:justify-start lg:gap-32 lg:even:flex-row-reverse">
      <MotionDiv
        {...fadeScale}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="relative h-[348px] w-[360px] sm:h-[517px] sm:w-[535px]"
      >
        <Image
          src={aboutImage}
          alt={aboutTitle}
          fill
          sizes="100%"
          className="object-contain"
        />
      </MotionDiv>

      <div className="flex flex-col items-center space-y-8 lg:max-w-2xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <MotionSpan
              {...fadeLeft}
              transition={{ duration: 0.3 }}
              className="block bg-gradient-to-br from-primary to-secondary bg-clip-text text-center text-lg font-bold text-transparent lg:text-start"
            >
              0{index}.
            </MotionSpan>
            <MotionH3
              {...fade}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-4xl font-bold lg:max-w-sm lg:text-start lg:text-6xl"
            >
              {aboutTitle}
            </MotionH3>
          </div>
          <div className="space-y-4">
            <MotionP
              {...fade}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center text-lg text-muted lg:max-w-lg lg:text-start"
            >
              {aboutDescription}
            </MotionP>
            <MotionP
              {...fade}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center text-lg text-muted lg:max-w-lg lg:text-start"
            >
              {aboutDescriptionSecondary}
            </MotionP>
          </div>
        </div>
        <MotionDiv {...fadeLeft} transition={{ duration: 0.3, delay: 0.8 }}>
          <Link
            href={aboutLink}
            className="flex w-fit items-center border-b py-1 text-lg font-bold"
          >
            Learn more
            <ArrowUpRight className="ml-2 h-6 w-6" />
            <span className="sr-only">Link learn more</span>
          </Link>
        </MotionDiv>
      </div>
    </div>
  )
}
