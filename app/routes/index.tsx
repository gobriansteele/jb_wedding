import type { LinksFunction } from '@remix-run/node'
import { useRef, useEffect } from 'react'

import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function IndexRoute() {
  const videoElement = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const videoEl = videoElement.current
    function logIt() {
      console.log('ENDED')
    }

    videoEl?.addEventListener('pause', logIt)
    return () => {
      videoEl?.removeEventListener('pause', logIt)
    }
  })

  return (
    <>
      <div className="index-video-container">
        <video
          ref={videoElement}
          poster="/assets/images/wedding_poster.jpg"
          id="bgvid"
          playsInline
          autoPlay
          muted
        >
          <source src="/assets/videos/proposal.webm" type="video/webm" />
          <source src="/assets/videos/proposal.mp4" type="video/mp4" />
          <p>Your browser does not support video</p>
        </video>
      </div>
      <div className="index-content-grid-container">
        <div className="index-content-container">
          <h2>April 2nd, 2023</h2>
          <p>Tre Posti</p>
          <p>Napa Valley, CA</p>
        </div>
      </div>
    </>
  )
}
