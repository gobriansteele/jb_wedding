import {
  Menu,
  MenuButton,
  MenuLink,
  MenuList,
  useMenuButtonContext,
} from '@reach/menu-button'
import '@reach/menu-button/styles.css'
import { NavLink } from '@remix-run/react'
import { AnimatePresence, motion } from 'framer-motion'
import type { MenuProps } from './Header'

export function MobileMenuLinks({ items }: MenuProps) {
  const { isExpanded } = useMenuButtonContext()
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          key={'mobile-menu'}
          initial={{ height: 0 }}
          animate={{ height: `calc(100vh - 60px)` }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu-wrap"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            style={{ textAlign: 'center' }}
          >
            <MenuList portal={false}>
              {items.map((item) => {
                return (
                  <MenuLink as={NavLink} key={item.route} to={item.route}>
                    {item.label}
                  </MenuLink>
                )
              })}
              <div style={{ flexGrow: 5 }}></div>
            </MenuList>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function MobileMenu({ items }: MenuProps) {
  return (
    <>
      <Menu>
        {({ isExpanded }) => {
          const state = isExpanded ? 'open' : 'closed'
          return (
            <>
              <MenuButton className="mobile-menu-button">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    animate={state}
                    variants={topVariants}
                    x="6"
                    y="9"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                  <motion.rect
                    animate={state}
                    variants={centerVariants}
                    x="6"
                    y="15"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                  <motion.rect
                    animate={state}
                    variants={bottomVariants}
                    x="6"
                    y="21"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                  />
                </svg>
              </MenuButton>

              <MobileMenuLinks items={items} />
            </>
          )
        }}
      </Menu>
    </>
  )
}

const topVariants = {
  open: { rotate: 45, y: 7 },
  closed: { rotate: 0, y: 0 },
}

const centerVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
}

const bottomVariants = {
  open: { rotate: -45, y: -5 },
  closed: { rotate: 0, y: 0 },
}
