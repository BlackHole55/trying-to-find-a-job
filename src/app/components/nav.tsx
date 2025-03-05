'use client'

import Link from 'next/link'
import Clock from 'react-live-clock'
import WindowsIcon from '../../../public/svg/Windows.svg'
import SoundIcon from '../../../public/svg/Sound.svg'

const navItems = {
  '/': {
    name: 'Start',
    icon: <WindowsIcon/>,
    fontWeight: 'font-bold',
  },
  '/resume': {
    name: 'resume',
    icon: '',
    fontWeight: '',
  },
}

export function Navbar() {
  return (
    <aside className="absolute w-full bottom-0">
      <nav className="flex flex-row items-start relative bg-[#B5BEB2] h-[4%] border-t-[#E8E8E8] border-t-3 text-black font-[family-name:var(--font-ms-sans-serif)] text-sm">
        <div className="flex flex-row space-x-0">
          {Object.entries(navItems).map(([path, { name, icon, fontWeight }]) => {
          return (
            <Link
            key={path}
            href={path}
            className={`flex align-middle relative py-0.5 px-1 my-0.5 mx-1 border-2 border-t-[#E8E8E8] border-l-[#E8E8E8] ${fontWeight}`}
            >
            <div className='pr-1'>{icon}</div> {name}
            </Link>
          )
          })}
        </div>
        <div className='flex align-middle absolute self-center right-1 py-0.5 px-1 border-2 border-t-[#808080] border-l-[#808080] border-b-[#E8E8E8] border-r-[#E8E8E8] select-none'>
          <SoundIcon className='self-center pr-2' />
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
