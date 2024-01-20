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
    <div>
      <div className="relative h-[352px] w-[265px]">
        <Image
          src={collectionImage}
          alt={collectionTitle}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-center text-2xl font-bold">{collectionTitle}</h3>
        <p className="text-center text-sm text-muted">
          {collectionDescription}
        </p>
      </div>
    </div>
  )
}
