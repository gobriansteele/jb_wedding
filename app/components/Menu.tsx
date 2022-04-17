import { NavLink } from '@remix-run/react'

interface MenuItemProps {
  label: string
  route: string
}

interface MenuProps {
  items: MenuItemProps[]
}

export function Menu({ items }: MenuProps) {
  return (
    <ul className="menu-wrap">
      {items.map((item) => {
        return (
          <MenuItem label={item.label} route={item.route} key={item.label} />
        )
      })}
    </ul>
  )
}

function MenuItem({ label, route }: MenuItemProps) {
  return (
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? 'nav-link-active' : undefined)}
        to={route}
      >
        {label}
      </NavLink>
    </li>
  )
}
