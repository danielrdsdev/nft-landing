import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LayerImages } from './layer-images'

export const ContactSection = () => {
  return (
    <section className="container relative space-y-8 rounded-4xl border px-14 py-16">
      <LayerImages />

      <div className="space-y-4">
        <SectionTitle titlePrimary="Never" titleSecondary="miss a drop!" />
        <p className="text-center text-lg text-muted">
          Subscribe to our super-rare and exclusive drops & collectibles.
        </p>
      </div>

      <form className="mx-auto flex max-w-lg items-center justify-center gap-3">
        <Input placeholder="Enter your email" />

        <Button className="w-fit">Subscribe</Button>
      </form>
    </section>
  )
}
