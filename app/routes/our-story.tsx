import type { LinksFunction } from '@remix-run/node'
import stylesUrl from '~/styles/our-story.css'

import { OUR_STORY_ITEMS } from '~/data/ourStory'
import { TimelineItem } from '~/components/TimelineItem'

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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {OUR_STORY_ITEMS.map((story) => {
          return (
            <div key={story.title} className="our-story-item-wrap">
              <TimelineItem
                title={story.title}
                descriptions={story.descriptions || undefined}
                date={story.date}
                summary={story.summary}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}
