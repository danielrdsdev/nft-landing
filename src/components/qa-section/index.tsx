import { SectionTitle } from '@/components/section-title'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { fadeUp } from '@/lib/animations'
import { MotionDiv } from '../providers/motion'

const qaItems = [
  {
    title: 'What is Nfthubs NFT Collection?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
  {
    title: 'How we can buy and invest NFT?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
  {
    title: 'Why we should choose Nerkos NFT?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
  {
    title: 'Where we can buy and sell NFts?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
  {
    title: 'How secure is this token?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
  {
    title: 'What is your contract address?',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.',
  },
]

export const QASection = () => {
  return (
    <section className="container space-y-20 overflow-hidden py-32">
      <SectionTitle
        className="mx-auto max-w-lg"
        titlePrimary="Your questions,"
        titleSecondary="answered!"
      />

      <MotionDiv
        {...fadeUp}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: 'spring',
          stiffness: 200,
        }}
        className="mx-auto max-w-2xl rounded-3xl border p-8 lg:p-12"
      >
        <Accordion type="single" collapsible>
          {qaItems.map((item) => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent className="text-muted">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionDiv>
    </section>
  )
}
