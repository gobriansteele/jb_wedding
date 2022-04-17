import { Menu } from './Menu'

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
    </div>
  )
}

export function Logo() {
  return (
    <div>
      <h1 className="logo-text global-headline">Jackie &amp; Brian</h1>
    </div>
  )
}
