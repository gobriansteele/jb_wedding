import type { LinksFunction } from '@remix-run/node'

import stylesUrl from '~/styles/index.css'

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: stylesUrl }]
}

export default function IndexRoute() {
  return (
    <img
      src="/assets/images/jackie_ring_small-3.jpg"
      alt="Jackie with a wedding magazine"
    />
  )
}
