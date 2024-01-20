type SectionTitleProps = {
  titlePrimary: string
  titleSecondary: string
}
export const SectionTitle = ({
  titlePrimary,
  titleSecondary,
}: SectionTitleProps) => {
  return (
    <h3 className="text-center text-6xl font-bold">
      {titlePrimary}{' '}
      <span className="bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
        {titleSecondary}
      </span>
    </h3>
  )
}
