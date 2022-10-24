import type {
  MetaFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  useOutlet,
  useLocation,
  useLoaderData,
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
    { rel: "icon", href: "/favicon.png" },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Jackie & Brian",
  viewport: "width=device-width,initial-scale=1",
})

export const loader: LoaderFunction = () => {
  return {
    env: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
  }
}

export default function App() {
  const { env } = useLoaderData<Window>()
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
