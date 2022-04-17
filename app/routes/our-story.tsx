import type { LinksFunction } from '@remix-run/node'
import stylesUrl from '~/styles/our-story.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function OurStory() {
  return (
    <>
      <div className="hero-image-wrap">
        <div className="hero-image-overlay">
          <h1 className="global-headline">Our Story</h1>
        </div>
      </div>
    </>
  )
}
