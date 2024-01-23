import { Icons } from '@/components/icons'
import { MotionDiv } from '@/components/providers/motion'
import { fade } from '@/lib/animations'

export const EnterprisesSection = () => {
  return (
    <section className="container flex items-center justify-center overflow-hidden py-32">
      <MotionDiv
        {...fade}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-12 lg:justify-start"
      >
        <Icons.metamask className="fill-foreground" />
        <Icons.bitgo className="fill-foreground" />
        <Icons.coinbase />
        <Icons.trustwallet className="fill-foreground" />
        <div className="flex items-center gap-2">
          <Icons.exodus />
          <span className="font-secondary text-lg font-bold uppercase">
            exodus
          </span>
        </div>
      </MotionDiv>
    </section>
  )
}
