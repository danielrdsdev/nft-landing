import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
      <Image src={aboutImage} alt={aboutTitle} width={535} height={517} />

      <div className="flex flex-col space-y-8">
        <div className="space-y-4">
          <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-lg font-bold text-transparent">
            0{index}.
          </span>
          <h3 className="max-w-sm text-6xl font-bold">{aboutTitle}</h3>
          <p className="text-lg text-muted">{aboutDescription}</p>
          <p className="text-lg text-muted">{aboutDescriptionSecondary}</p>
        </div>
        <Link
          href={aboutLink}
          className="flex w-fit items-center border-b py-1 text-lg font-bold"
        >
          Learn more
          <ArrowUpRight className="ml-2 h-6 w-6" />
        </Link>
      </div>
    </div>
  )
}
