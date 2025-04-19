'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const ActiveTab = () => {
  const pathname = usePathname()
  console.log(pathname.split('/')[1]);

  const isActive = (path: string) => {
    // Exact match check
    if (pathname === path) return true

    // Partial match (useful for subcategories)
    if (pathname.startsWith(path)) return true

    // For dynamic routes, you might want to check the path along with query params
    // Example: /entrepreneur/projects?id=123 should match for projects link
    // const queryString = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
    // if (pathname === path && queryString) return true

    return false
  }

  return (
    <div>
      <div className='maxWidth grid grid-cols-3 bg-secondary p-1 my-8'>
        <Link
          href={`/${pathname.split('/')[1]}/portfolio`}
          className={`${isActive(`/${pathname.split('/')[1]}/portfolio`) ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          Portfolio
        </Link>
        <Link
          href={`/${pathname.split('/')[1]}/${pathname.split('/')[1] === 'entrepreneur' ? 'investors' : 'investments'}`}
          className={`${isActive(`/${pathname.split('/')[1]}/${pathname.split('/')[1] === 'entrepreneur' ? 'investors' : 'investments'}`) ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          {pathname.split('/')[1] === 'entrepreneur' ? 'Investors' : 'Investments'}
        </Link>
        <Link
          href={`/${pathname.split('/')[1]}/projects`}
          className={`${isActive(`/${pathname.split('/')[1]}/projects`) ? 'bg-primary text-white' : 'transparent text-gray-700'} py-3 px-1 font-semibold text-center`}
        >
          Projects
        </Link>
        
      </div>
    </div>
  )
}

export default ActiveTab
