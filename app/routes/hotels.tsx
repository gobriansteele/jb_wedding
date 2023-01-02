import type { LinksFunction } from "@remix-run/node"
import {
  HotelCard,
  HotelCardImage,
  HotelCardInfo,
} from "~/components/HotelCard"

import stylesUrl from "~/styles/hotels.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}
export default function HotelsPage() {
  return (
    <>
      <div className="hero-image-wrap">
        <div className="hero-image-overlay">
          <h1 className="global-headline">Hotels</h1>
        </div>
      </div>
      <div className="details-wrap">
        <div className="details-content-wrap">
          <p>Thank you for making the journey to celebrate with us!</p>
          <p>
            We're delighted to have family and friends from near and far coming
            to our wedding. To help you find accommodations, we have reserved a
            block of hotel rooms for nights from [insert date] to [insert date]
            at the [insert hotel name(s)].
          </p>
        </div>
        <HotelCard>
          <HotelCardImage
            image="/assets/images/el_bonita_hotel.jpg"
            description="el bonita hotel"
          />
          <HotelCardInfo
            name="El Bonita Hotel"
            costRating={2}
            distanceFromVenue={1}
          />
        </HotelCard>
      </div>
    </>
  )
}
