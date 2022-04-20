import React from 'react'
import { Switch } from './Switch'

interface TimelineItemProp {
  title: string
  descriptions: {
    jackie?: string
    brian?: string
  }
  image?: string
}

export function TimelineItem({ title, descriptions, image }: TimelineItemProp) {
  const [isBrian, setIsBrian] = React.useState(false)
  const handleSwitchChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setIsBrian(evt.target.checked)
  }

  return (
    <div className="timeline-item-wrap">
      <h2 className="timeline-item-title">{title}</h2>
      <Switch onChange={handleSwitchChange} />
      <p>{isBrian ? "Brian's Story" : "Jackie's Story"}</p>
    </div>
  )
}
