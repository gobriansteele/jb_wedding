import type { LinksFunction } from '@remix-run/node'

import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function IndexRoute() {
  return (
    <div className="index-video-container">
      <video
        poster="/assets/images/wedding-poster.jpg"
        id="bgvid"
        playsInline
        autoPlay
        muted
        loop
      >
        <source src="/assets/videos/proposal.webm" type="video/webm" />
        <source src="/assets/videos/proposal.mp4" type="video/mp4" />
        <p>Your browser does not support video</p>
      </video>
    </div>
  )
}
