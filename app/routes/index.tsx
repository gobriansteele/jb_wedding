import type { LinksFunction } from '@remix-run/node'
import { useRef, useEffect, useState } from 'react'

import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function IndexRoute() {
  const videoElement = useRef<HTMLVideoElement>(null)
  const [isVideoComplete, setIsVideoComplete] = useState(false)

  useEffect(() => {
    const videoEl = videoElement.current
    function logIt() {
      setIsVideoComplete(true)
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
          className={`${isVideoComplete ? 'hidden' : undefined}`}
          playsInline
          autoPlay
          muted
        >
          <source
            src="/assets/videos/marriage_proposal.webm"
            type="video/webm"
          />
          <source src="/assets/videos/marriage_proposal.mp4" type="video/mp4" />
          <p>Your browser does not support video</p>
        </video>
      </div>
      <div className="index-content-grid-container">
        <div className="index-content-container">
          <h1 className="global-headline index-headline">Jackie &amp; Brian</h1>
          <h2 className="index-subheadline"></h2>
          <h3 className="index-info">April 2nd, 2023 | Napa Valley, CA</h3>
        </div>
      </div>
    </>
  )
}
