import Image from 'next/image'

type CollectionCardProps = {
  collectionImage: string
  collectionTitle: string
  collectionDescription: string
}

export const CollectionCard = ({
  collectionImage,
  collectionTitle,
  collectionDescription,
}: CollectionCardProps) => {
  return (
    <>
      <div className="relative h-[352px] w-full">
        <Image
          src={collectionImage}
          alt={collectionTitle}
          fill
          sizes="100%"
          className="rounded-lg object-cover"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="text-center text-2xl font-bold">{collectionTitle}</h3>
        <p className="text-center text-sm text-muted">
          {collectionDescription}
        </p>
      </div>
    </>
  )
}
