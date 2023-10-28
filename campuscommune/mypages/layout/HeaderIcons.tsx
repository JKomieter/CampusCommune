import { RiHome2Line } from 'react-icons/ri'
import { FaRegBell, FaRegListAlt } from 'react-icons/fa'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { BiGroup } from 'react-icons/bi'
import { Badge } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { Tooltip } from '@nextui-org/react'

const HeaderIcons = ({
  notificationsCount
}: {
  notificationsCount: number
}) => {
  const router = useRouter()

  const Icons = [
    {
      name: 'Home',
      icon: <RiHome2Line size={28} className='text-neutral-600' />,
      link: '/',
      badgeContent: 0
    },
    {
      name: 'Notes',
      icon: <FaRegListAlt size={26} className='text-neutral-600' />,
      link: '/notes',
      badgeContent: 3
    },
    {
      name: 'Answers',
      icon: <FaRegPenToSquare size={26} className='text-neutral-600' />,
      link: '/answers',
      badgeContent: 5
    },
    {
      name: 'Groups',
      icon: <BiGroup size={31} className='text-neutral-600' />,
      link: '/groups',
      badgeContent: 0
    },
    {
      name: 'Notifications',
      icon: <FaRegBell size={27} className='text-neutral-600' />,
      link: '/notifications',
      badgeContent: notificationsCount
    }
  ]



  return (
    <div className='md:flex flex-row items-center gap-3 hidden w-full justify-between'>
      {Icons.map((Icon) => (
        <Tooltip key={Icon.name} content={Icon.name} placement='bottom'>
          <span
            onClick={() => router.push(Icon.link)}
            className='cursor-pointer'
          >
            <Badge color='primary' shape='circle' content={Icon.badgeContent}>
              {Icon.icon}
            </Badge>
          </span>
        </Tooltip>
      ))}
    </div>
  )
}

export default HeaderIcons
