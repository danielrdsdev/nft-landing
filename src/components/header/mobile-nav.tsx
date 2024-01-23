import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MAIN_LINKS, SOCIAL_LINKS } from '@/config/nav'
import { NavLink } from './nav-link'

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="h-8 w-8" />
        <span className="sr-only">Mobile menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="bg-background p-0">
        <SheetHeader className="p-6">
          <SheetTitle>
            <Icons.logo className="h-8 w-32 fill-foreground" />
          </SheetTitle>
        </SheetHeader>
        <nav className="divide-border/10 border-border/10 flex flex-col divide-y border-y">
          {MAIN_LINKS.map((link) => (
            <NavLink
              key={link.label}
              sectionId={link.sectionId}
              className="px-6 py-3 text-left"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-3 py-8">
          {SOCIAL_LINKS.map((link) => (
            <>
              {link.mobile === true && (
                <Button key={link.id} variant="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="h-6 w-6 fill-foreground" />
                    <span className="sr-only">Social icon</span>
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
