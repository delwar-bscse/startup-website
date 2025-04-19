import Image, { StaticImageData } from 'next/image'
import Profile from '@/assets/projects/project.png';
import Profile2 from '@/assets/projects/project_01.png';
import { FC } from 'react'
import Link from 'next/link';
import InvestmentStatistic from '@/components/section/InvestmentStatistic';
import InvestmentVsEquity from '@/components/section/InvestmentVsEquity';

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
  }
]

const InvestorsTable: FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-4">
      <div className='w-full overflow-x-auto p-2 my-10'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8 text-gray-700'>Investment Statistics</h2>
        <div className='w-full min-w-[800px]'>
          <InvestmentStatistic />
        </div>
      </div>
      <div className='w-full overflow-x-auto p-2 my-10'>
        <h2 className='text-3xl md:text-5xl font-bold pb-8 text-gray-700'>Investment vs Equity</h2>
        <div className='w-full min-w-[800px]'>
          <InvestmentVsEquity />
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-4 px-2">
        <table className="w-full min-w-[1040px] table-auto bg-white" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-4 px-4 text-left">E-mail</th>
              <th className="py-4 px-4 text-left">Investors</th>
              <th className="py-4 px-4 text-left">Amount</th>
              <th className="py-4 px-4 text-left">Shareholder</th>
              <th className="py-4 px-4 text-left">Date</th>
              <th className="py-4 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {investors.map((investor, index) => (
              <tr key={index}>
                <td className="py-3 px-4 flex items-center">
                  <Image src={investor.profileUrl} width={48} height={48} alt={investor.name} className="w-[48px] h-[48px] rounded-full border-2 border-primary" />
                  <span className="ml-2">{investor.name}</span>
                </td>
                <td className="py-3 px-4">{investor.email}</td>
                <td className="py-3 px-4">{investor.amount}</td>
                <td className="py-3 px-4">{investor.shareholder}</td>
                <td className="py-3 px-4">{investor.date}</td>
                <td className="py-3 w-30">
                  <Link href={`/entrepreneur/investors/${index + 1}`} className="bg-primary2 block text-center text-gray-600 font-semibold py-3 w-full rounded-md">See Profile</Link>
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
