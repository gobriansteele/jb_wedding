import type { MetaFunction } from '@remix-run/node'
import type { LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react'

import stylesUrl from '~/styles/global.css'

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: stylesUrl },
    { rel: 'stylesheet', href: 'https://use.typekit.net/cpz2axi.css' },
  ]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
