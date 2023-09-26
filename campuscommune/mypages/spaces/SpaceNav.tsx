import { useState } from 'react'

type selectedNavItem = 'About' | 'Posts' | 'Questions'

const SpaceNav = () => {
  const [selectedNavItem, setSelectedNavItem] =
    useState<selectedNavItem>('About')

  const navItems = [
    {
      name: 'About',
      href: '#'
    },
    {
      name: 'Posts',
      href: '#'
    },
    {
      name: 'Questions',
      href: '#'
    }
  ]


  return (
    <div
      style={{ borderBottomWidth: '0.5px' }}
      className='w-full flex flex-row gap-2 border-neutral-400 text-neutral-700 md:text-sm text-xs'
    >
      {navItems.map(item => (
        <span
          key={item.name}
          onClick={() =>
            setSelectedNavItem(item.name as typeof selectedNavItem)
          }
          style={{borderBottom: selectedNavItem === item.name ? '3px solid blue' : ''}}
          className={`py-3 px-4 cursor-pointer transition-all duration-100`}
        >
          {item.name}
        </span>
      ))}
    </div>
  )
}

export default SpaceNav
