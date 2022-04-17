import { Link, useMatches } from '@remix-run/react'

interface MenuItemProps {
  label: string
  route: string
  isActive?: boolean
}

interface MenuProps {
  items: MenuItemProps[]
}

export function Menu({ items }: MenuProps) {
  const [_, { pathname }] = useMatches()
  console.log(pathname)

  return (
    <ul className="menu-wrap">
      {items.map((item) => {
        return (
          <MenuItem
            label={item.label}
            route={item.route}
            key={item.label}
            isActive={pathname === item.route}
          />
        )
      })}
    </ul>
  )
}

function MenuItem({ label, route, isActive }: MenuItemProps) {
  console.log({ route, isActive })
  return (
    <li className={`${isActive && 'menu-item-active'}`}>
      <Link to={route}>{label}</Link>
    </li>
  )
}
