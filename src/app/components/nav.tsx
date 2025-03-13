'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Clock from 'react-live-clock'
import WindowsIcon from '../../../public/svg/Windows.svg'
import SoundIcon from '../../../public/svg/Sound.svg'
import TxtIcon from '../../../public/svg/TXT_file.svg'

export function Navbar() {
  const pathname = usePathname();
  const navItems = {
    '/resume': {
      name: 'Resume',
      icon: <TxtIcon />,
      isActive: pathname === '/resume' ? 'active' : '',
    },
  }

  return (
    <aside className="absolute w-full bottom-0">
      <nav className="flex flex-row items-start relative bg-[#B5BEB2] h-[4%] border-t-[#E8E8E8] border-t-3 text-black font-[family-name:var(--font-ms-sans-serif)] text-sm">
        <Link href='/' className='flex align-middle relative py-0.5 px-1 my-0.5 mx-1 border-2 border-t-[#E8E8E8] border-l-[#E8E8E8] font-bold'>
          <WindowsIcon className="mr-1" /> Start
        </Link>
        <div className="flex flex-row space-x-0">
          {Object.entries(navItems).map(([path, { name, icon, isActive }]) => {
          return (
            <Link
            key={path}
            href={path}
            className={`flex gap-1 items-center relative py-0.5 px-1 my-0.5 mx-1 border-2 border-t-[#E8E8E8] border-l-[#E8E8E8] pattern-rectangles [&.active]:bg-[#E8E8E8] [&.active]:border-[#E8E8E8] [&.active]:border-t-black [&.active]:border-l-black [&.active]:outline-1 [&.active]:outline-[#808080] [&.active]:-outline-offset-2 ${isActive}`}
            >
            {icon} {name}
            </Link>
          )
          })}
        </div>
        <div className='flex align-middle absolute self-center right-1 py-0.5 px-1 border-2 border-t-[#808080] border-l-[#808080] border-b-[#E8E8E8] border-r-[#E8E8E8] select-none'>
          <SoundIcon className='self-center mr-1' />
          <Clock
            format={'h:mm A'}
            ticking={true} 
            timezone={'Asia/Qyzylorda'} 
            />
        </div>
      </nav>
    </aside>
  )
}
