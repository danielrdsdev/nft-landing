import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MAIN_LINKS, SOCIAL_LINKS } from '@/config/nav'
import Link from 'next/link'
import { Icons } from '../icons'
import { Button } from '../ui/button'

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-black p-0">
        <SheetHeader className="p-6">
          <SheetTitle>
            <Icons.logo className="h-8 w-32" />
          </SheetTitle>
        </SheetHeader>
        <nav className="divide-border/10 border-border/10 flex flex-col divide-y border-y">
          {MAIN_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-3 font-bold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-3 py-8">
          {SOCIAL_LINKS.map((link) => (
            <>
              {link.mobile === true && (
                <Button
                  key={link.href}
                  variant="icon"
                  asChild
                  className="bg-black"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              )}
            </>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
