import { NavLink } from '@remix-run/react'

import { Menu } from './Menu'
import { MobileMenu } from './MobileMenu'

export interface MenuItemProps {
  label: string
  route: string
}

export interface MenuProps {
  items: MenuItemProps[]
}

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
      <MobileMenu items={links} />
    </div>
  )
}

export function Logo() {
  return (
    <div>
      <NavLink to="/">
        <h1 className="logo-text global-headline">Jackie &amp; Brian</h1>
      </NavLink>
    </div>
  )
}
