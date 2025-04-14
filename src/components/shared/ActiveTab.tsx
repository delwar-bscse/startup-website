'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ActiveTab = () => {
  const pathname = usePathname()

  // Function to check if the link is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div>
      <div className='maxWidth grid grid-cols-3 bg-secondary p-1 my-8'>
        <Link
          href="/entrepreneur/portfolio"
          className={`${isActive('/entrepreneur/portfolio') ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          Portfolio
        </Link>
        <Link
          href="/entrepreneur/projects"
          className={`${isActive('/entrepreneur/projects') ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          Projects
        </Link>
        <Link
          href="/entrepreneur/investors"
          className={`${isActive('/entrepreneur/investors') ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          Investors
        </Link>
      </div>
    </div>
  )
}

export default ActiveTab
