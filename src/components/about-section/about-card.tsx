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
    <div className="flex items-center gap-32 even:flex-row-reverse">
      <MotionDiv
        {...fadeScale}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
        className="relative h-[517px] w-[535px]"
      >
        <Image
          src={aboutImage}
          alt={aboutTitle}
          fill
          sizes="100%"
          className="object-contain"
        />
      </MotionDiv>

      <div className="flex max-w-2xl flex-col space-y-8">
        <div className="space-y-4">
          <MotionSpan
            {...fadeLeft}
            transition={{ duration: 0.3 }}
            className="block bg-gradient-to-br from-primary to-secondary bg-clip-text text-lg font-bold text-transparent"
          >
            0{index}.
          </MotionSpan>
          <MotionH3
            {...fade}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm text-6xl font-bold"
          >
            {aboutTitle}
          </MotionH3>
          <MotionP
            {...fade}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-lg text-lg text-muted"
          >
            {aboutDescription}
          </MotionP>
          <MotionP
            {...fade}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-lg text-lg text-muted"
          >
            {aboutDescriptionSecondary}
          </MotionP>
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
