import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

export const HeroSection = () => {
  return (
    <section className="container grid min-h-[70dvh] grid-cols-1 gap-4 pb-72 pt-48 lg:grid-cols-2">
      <div className="flex max-w-[585px] flex-col space-y-8">
        <div className="space-y-2">
          <h1 className="text-7xl font-bold">High Quality NFT Collection</h1>
          <p className="text-xl text-muted">
            A 890 piece custom Nerkos collection is joining the NFT space on
            Opensea.
          </p>
        </div>

        <Button className="w-fit">
          View in OPENSEA
          <ArrowUpRight className="ml-2 h-6 w-6" />
        </Button>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <Image
              src="/avatar-01.png"
              alt="Avatar 01"
              width={48}
              height={48}
            />
            <Image
              src="/avatar-02.png"
              alt="Avatar 02"
              width={48}
              height={48}
              className="relative right-5"
            />
            <Image
              src="/avatar-03.png"
              alt="Avatar 03"
              width={48}
              height={48}
              className="relative right-10"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">47k+</h2>
            <p className="text-xs text-muted">Community members</p>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <div className="absolute left-0 top-0 h-[271px] w-[271px]">
          <Image src="/art_01.png" alt="Art 01" fill />
        </div>

        <div className="absolute bottom-0 right-0 h-[271px] w-[271px]">
          <Image src="/art_03.png" alt="Art 01" fill />

          <div className="absolute left-10 top-10 -z-10 h-[240px] w-[240px] -rotate-[10deg] rounded-[48px] border" />
        </div>

        <div className="absolute bottom-[10%] h-10 w-10 -translate-y-[10%] rounded-full border" />

        <div className="absolute right-[20%] top-0 h-10 w-10 -translate-x-[20%] rounded-full bg-muted" />
      </div>
    </section>
  )
}
