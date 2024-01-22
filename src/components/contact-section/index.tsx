import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { fadeUp } from '@/lib/animations'
import { MotionDiv } from '../providers/motion'
import { LayerImages } from './layer-images'

export const ContactSection = () => {
  return (
    <section className="container py-32">
      <MotionDiv
        {...fadeUp}
        transition={{
          duration: 0.3,
          type: 'spring',
          stiffness: 200,
        }}
        className="relative rounded-4xl border px-14 py-16"
      >
        <LayerImages />

        <div className="space-y-9">
          <div className="space-y-5">
            <SectionTitle titlePrimary="Never" titleSecondary="miss a drop!" />
            <p className="text-center text-lg text-muted">
              Subscribe to our super-rare and exclusive drops & collectibles.
            </p>
          </div>

          <form className="mx-auto flex max-w-lg items-center justify-center gap-2">
            <Input placeholder="Enter your email" />

            <Button className="w-fit">Subscribe</Button>
          </form>
        </div>
      </MotionDiv>
    </section>
  )
}
