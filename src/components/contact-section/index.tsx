import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export const ContactSection = () => {
  return (
    <section className="rounded-4xl container relative space-y-8 border px-14 py-16">
      <div className="absolute left-[96px] top-[51px]">
        <Image src="/circle-01.png" alt="img" width={16} height={16} />
      </div>
      <div className="absolute right-[192px] top-[51px]">
        <Image src="/x.png" alt="img" width={24} height={24} />
      </div>
      <div className="absolute bottom-[76px] left-[192px]">
        <Image src="/dcoin.png" alt="img" width={32} height={32} />
      </div>
      <div className="absolute bottom-[51px] right-[96px]">
        <Image src="/ethereum-02.png" alt="img" width={44} height={44} />
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
