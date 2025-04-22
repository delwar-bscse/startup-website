import Image, { StaticImageData } from 'next/image'
import Profile from '@/assets/projects/project.png';
import Profile2 from '@/assets/projects/project_01.png';
import { FC } from 'react'
import Link from 'next/link';

interface Investor {
  name: string
  email: string
  amount: string
  shareholder: string
  date: string
  profileUrl: StaticImageData
}

const investors: Investor[] = [
  {
    name: 'John Doe',
    email: 'johndoe23@gmail.com',
    amount: '300$',
    shareholder: '10%',
    date: '14/2/2025',
    profileUrl: Profile,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
  {
    name: 'John Doe',
    email: 'johndoe23@gmail.com',
    amount: '300$',
    shareholder: '10%',
    date: '14/2/2025',
    profileUrl: Profile,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
  {
    name: 'John Doe',
    email: 'johndoe23@gmail.com',
    amount: '300$',
    shareholder: '10%',
    date: '14/2/2025',
    profileUrl: Profile,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
  {
    name: 'John Doe',
    email: 'johndoe23@gmail.com',
    amount: '300$',
    shareholder: '10%',
    date: '14/2/2025',
    profileUrl: Profile,
  },
  {
    name: 'Jane Smith',
    email: 'janesmith23@gmail.com',
    amount: '250$',
    shareholder: '8%',
    date: '15/3/2025',
    profileUrl: Profile2,
  },
]

const InvestorsTable: FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-4 px-2">
      <h2 className='text-3xl md:text-4xl lg:text-5xl py-4 font-bold text-gray-700'>Investor List</h2>
      <div className='w-full py-1 overflow-x-auto'>
      <table className="maxWidth min-w-[678px] table-auto bg-white" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead className="bg-primary text-white">
          <tr>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Investors</th>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Email</th>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Amount</th>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Shareholder</th>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Date</th>
            <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody className='text-sm md lg:text-base font-light'>
          {investors.map((investor, index) => (
            <tr key={index}>
              <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 flex items-center">
                <Image src={investor.profileUrl} width={400} height={400} alt={investor.name} className="w-[30px] lg:w-[40px] xl:w-[48px] h-[30px] lg:h-[40px] xl:h-[48px] rounded-full border-2 border-primary" />
                <span className="ml-2">{investor.name}</span>
              </td>
              <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">{investor.email}</td>
              <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">{investor.amount}</td>
              <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">{investor.shareholder}</td>
              <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">{investor.date}</td>
              <td className="py-1 md:py-2 lg:py-3 w-24 lg:w-30">
                <Link href={`/entrepreneur/investors/${index+1}`} className="bg-primary2 block text-center text-gray-600 font-semibold py-1 md:py-2 w-full rounded-md">See Profile</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default InvestorsTable
