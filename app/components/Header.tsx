import { Link } from '@remix-run/react'

import { Menu } from './Menu'
import { MobileMenuButton } from './MobileMenu'

const links = [
  {
    label: 'OUR STORY',
    route: '/our-story',
  },
  {
    label: 'DETAILS',
    route: '/details',
  },
]

export function Header() {
  return (
    <div className="header-wrap">
      <Logo />
      <Menu items={links} />
      <MobileMenuButton />
    </div>
  )
}

export function Logo() {
  return (
    <div>
      <Link to="/">
        <h1 className="logo-text global-headline">Jackie &amp; Brian</h1>
      </Link>
    </div>
  )
}
