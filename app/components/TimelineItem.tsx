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
      <div>
        <h2 className="timeline-item-title decoration">{title}</h2>
      </div>
      <div className="timeline-item-switch-wrap">
        <Switch onChange={handleSwitchChange} />
        <h3>{isBrian ? "Brian's " : "Jackie's "} version</h3>
      </div>
      <div>
        <p className="timeline-item-description">
          {isBrian ? descriptions.brian : descriptions.jackie}
        </p>
      </div>
    </div>
  )
}
