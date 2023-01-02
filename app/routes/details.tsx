import type { LinksFunction } from "@remix-run/node"
import stylesUrl from "~/styles/details.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function OurStory() {
  return (
    <>
      <div className="hero-image-wrap">
        <div className="hero-image-overlay">
          <h1 className="global-headline">Details</h1>
        </div>
      </div>
      <div className="details-wrap">
        <div className="details-content-wrap">
          <h2 className="details-section-heading">Where</h2>
          <h3 className="details-subheading">Venue</h3>
          <p>
            Our celebration will take place at the beautiful Tre Posti in the
            famous Napa Valley. The address is 641 Main Street, St. Helena, CA
            94574. There is plenty of parking and it is free.
          </p>
          <p>
            The ceremony will take place by the vineyard, followed by a cocktail
            hour in the Vignetto, and dinner on the Garden Grove lawn. We'll end
            the night with a kickin' dance party in the Tre Posti Harvest Room,
            just a short walk away.
          </p>
        </div>
        <div className="details-content-wrap">
          <h2 className="details-section-heading">When</h2>
          <h3 className="details-subheading">Date</h3>
          <p>Sunday, April 2nd, 2023</p>
          <h3 className="details-subheading">Time</h3>
          <p>The ceremony begins at 4:00PM. Arrive as early as 3:30PM</p>
        </div>
        <div className="details-content-wrap">
          <h2 className="details-section-heading">How</h2>
          <h3 className="details-subheading">Travel</h3>
          <p>
            For our out of town guests, you can fly into one of the following
            airports:
          </p>
          <ul className="details-airport-list">
            <li>San Francisco (SFO)</li>
            <li>Oakland (OAK)</li>
            <li>Sacramento (SMF)</li>
          </ul>
          <h3 className="details-subheading">Attire</h3>
          <p>
            The event is semi-formal, but anything you want to wear we are sure
            will be ok. The bride requests you refrain from wearing a wedding
            dress (but if that's really all you have to wear, she prefers that
            to you going naked). Napa spring weather is typically mild (60s -
            70s), but could get chilly once the sun goes down. The ceremony and
            dinner will be outside and the reception will be inside, so be sure
            to bring a sweater or light jacket just in case. And don't forget
            your sunglasses!
          </p>
        </div>
        <div className="details-content-wrap">
          <h2 className="details-section-heading">Questions</h2>
          <h3 className="details-subheading">Contact us</h3>
          <p>
            Any questions about the above?{" "}
            <a href="mailto:weddingofsteele2023@gmail.com">Send us an email</a>
          </p>
        </div>
      </div>
    </>
  )
}
