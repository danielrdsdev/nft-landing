import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export const ContactSection = () => {
  return (
    <section className="rounded-4xl container relative space-y-8 border px-14 py-16">
      <div className="absolute left-[96px] top-[51px]">
        <div className="relative h-4 w-4">
          <Image
            src="/circle-01.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute right-[192px] top-[51px]">
        <div className="relative h-6 w-6">
          <Image
            src="/x.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[76px] left-[192px]">
        <div className="relative h-8 w-8">
          <Image
            src="/dcoin.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-[51px] right-[96px]">
        <div className="relative h-11 w-11">
          <Image
            src="/ethereum-02.png"
            alt="img"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
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
