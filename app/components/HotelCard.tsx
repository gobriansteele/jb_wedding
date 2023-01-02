import React from "react"

interface HotelCardProps {
  children: React.ReactNode
}

export function HotelCard({ children }: HotelCardProps) {
  return <div className="hotel-card-wrap">{children}</div>
}

interface HotelCardImageProps {
  image: string
  description: string
}

export function HotelCardImage({ image, description }: HotelCardImageProps) {
  return (
    <div className="hotel-card-image-container">
      <img className="hotel-card-image" src={image} alt={description} />
    </div>
  )
}

interface HoteldCardInfoProps {
  name: string
  distanceFromVenue: number
  costRating: 1 | 2 | 3 | 4 | 5
}

export function HotelCardInfo({
  name,
  costRating,
  distanceFromVenue,
}: HoteldCardInfoProps) {
  const distanceNode = `${distanceFromVenue} mile${
    distanceFromVenue > 1 ? "s" : ""
  }`

  function renderCostRating() {
    const ratingArray: React.ReactElement[] = []
    for (let i = 1; i < 6; i++) {
      ratingArray.push(
        <>
          <span
            className={`${i <= costRating ? "" : "transparent"}`}
            key={`cost-${i}`}
          >
            🤑
          </span>
        </>
      )
    }
    return ratingArray
  }

  return (
    <div className="hotel-card-info-container">
      <span className="hotel-card-title">{name}</span>
      <div className="hotel-card-distance">
        Distance from venue: <span className="bold">{distanceNode}</span>
      </div>
      <div className="hotel-card-cost">{renderCostRating()}</div>
    </div>
  )
}
