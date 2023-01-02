import type { LinksFunction } from "@remix-run/node"
import { useRef, useEffect, useState } from "react"

import stylesUrl from "~/styles/index.css"

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function IndexRoute() {
  const videoElement = useRef<HTMLVideoElement>(null)

  const [shouldShowVideo, setShouldShowVideo] = useState(false)
  const [isVideoComplete, setIsVideoComplete] = useState(false)

  useEffect(() => {
    const isAtLeast768px = window.matchMedia("(min-width: 768px)")
    setShouldShowVideo(isAtLeast768px.matches)
  }, [setShouldShowVideo])

  useEffect(() => {
    const videoEl = videoElement.current

    function handleVideoEnd() {
      setIsVideoComplete(true)
    }

    videoEl?.addEventListener("ended", handleVideoEnd)
    return () => {
      videoEl?.removeEventListener("ended", handleVideoEnd)
    }
  })

  return (
    <>
      <div
        className={`index-video-container ${
          (isVideoComplete || !shouldShowVideo) && "video-not-playing"
        }`}
      >
        {shouldShowVideo && (
          <video
            ref={videoElement}
            poster="/assets/images/wedding_poster.jpg"
            className={`${isVideoComplete ? "hidden" : undefined}`}
            playsInline
            autoPlay
            preload="auto"
            muted
          >
            <source
              src="/assets/videos/marriage_proposal.mp4"
              type="video/mp4"
            />
            <source
              src="/assets/videos/marriage_proposal.webm"
              type="video/webm"
            />
            <p>Your browser does not support video</p>
          </video>
        )}
      </div>
      <div className="index-content-grid-container">
        <div className="index-content-container">
          <h1 className="global-headline index-headline">Jackie &amp; Brian</h1>
          <h2 className="index-subheadline"></h2>
          <h3 className="index-info">
            Napa Valley, California
            <br />
            <span className="index-date">April 2nd, 2023</span>
          </h3>
        </div>
      </div>
    </>
  )
}
