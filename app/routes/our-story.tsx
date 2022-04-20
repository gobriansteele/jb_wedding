import type { LinksFunction } from '@remix-run/node'
import stylesUrl from '~/styles/our-story.css'

import { TimelineItem } from '~/components/TimelineItem'

const TIMELINE_ITEMS = [
  {
    title: 'How We Met',
    descriptions: {
      jackie: 'some text',
      brian: 'some text',
    },
    image: '',
  },
]

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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TimelineItem {...TIMELINE_ITEMS[0]} />
      </div>
    </>
  )
}
