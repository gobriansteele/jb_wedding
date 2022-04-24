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
import { Footer } from "./components/Footer"
import stylesUrl from "~/styles/global.css"
import { AnimatePresence, motion } from "framer-motion"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: stylesUrl },
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
  const isNotHomePage = useLocation().pathname !== "/"

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
            transition={{ duration: 0.2 }}
            style={!isNotHomePage ? { height: "100%" } : undefined}
          >
            {outlet}
          </motion.main>
        </AnimatePresence>
        {isNotHomePage && <Footer />}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
