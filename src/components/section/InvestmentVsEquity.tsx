"use client";

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GoDotFill } from "react-icons/go";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const data = [
  {
    name: 'Page A',
    equity: 40,
    investment: 240,
  },
  {
    name: 'Page B',
    equity: 30,
    investment: 398,
  },
  {
    name: 'Page C',
    equity: 200,
    investment: 980,
  },
  {
    name: 'Page D',
    equity: 230,
    investment: 390,
  },
  {
    name: 'Page E',
    equity: 180,
    investment: 480,
  },
  {
    name: 'Page F',
    equity: 90,
    investment: 380,
  },
  {
    name: 'Page G',
    equity: 95,
    investment: 430,
  },
];

export default class InvestmentVsEquity extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className='p-2 border-2 border-gray-200 rounded-md'>
        <div className='flex justify-end pb-3'>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2026">2026</SelectItem>
                <SelectItem value="2027">2027</SelectItem>
                <SelectItem value="2028">2028</SelectItem>
                <SelectItem value="2029">2029</SelectItem>
                <SelectItem value="2030">2030</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={353}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="6 6" vertical={false} horizontal={true} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
              <YAxis tickLine={false} axisLine={false} tickMargin={20} />
              <Tooltip />
              <Bar dataKey="equity" fill="#684DEF" activeBar={<Rectangle fill="#684DEF" stroke="#684DEF" />} barSize={40} />
              <Bar dataKey="investment" fill="#EE443F" activeBar={<Rectangle fill="#EE443F" stroke="#EE443F" />} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='flex justify-end items-center gap-5 px-[30px]'>
          <p className='flex items-center gap-0 py-1 text-base text-[#684DEF]'>
            <GoDotFill className='text-3xl' />
            <span>Given Equity</span>
          </p>
          <p className='flex items-center gap-0 py-1 text-base text-[#EE443F]'>
            <GoDotFill className='text-3xl' />
            <span>Investment</span>
          </p>
        </div>
      </div>
    );
  }
}