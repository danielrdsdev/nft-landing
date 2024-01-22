import { Icons } from '@/components/icons'

export const EnterprisesSection = () => {
  return (
    <section className="container flex items-center justify-center py-32">
      <div className="flex flex-wrap items-center gap-12">
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
      </div>
    </section>
  )
}
