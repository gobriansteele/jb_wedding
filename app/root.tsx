import type { MetaFunction } from "@remix-run/node"
import type { LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  useOutlet,
  useLocation,
  Scripts,
} from "@remix-run/react"

import { Header } from "./components/Header"
import stylesUrl from "~/styles/global.css"
import { AnimatePresence, motion } from "framer-motion"
import reachStylesUrl from "@reach/menu-button/styles.css"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
    // { rel: "stylesheet", href: reachStylesUrl },
    { rel: "stylesheet", href: "https://use.typekit.net/cpz2axi.css" },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  const outlet = useOutlet()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <motion.main
            key={useLocation().key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ height: "100%" }}
            transition={{ duration: 0.2 }}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
