"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Data {
  name: string;
  value: number;
}

const data: Data[] = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 400 },
];

const COLORS = ['#5F46D9', '#D0C8FA'];

const RADIAN = Math.PI / 180;

// Typing the renderCustomizedLabel function
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TargetVsRaisedAmount: React.FC = () => {
  return (
    <div className='maxWidth'>
      <h2 className='text-3xl md:text-5xl font-bold pb-8 text-gray-700'>Targeted Vs Raised Amount</h2>
      <div className='flex justify-center gap-12 border border-gray-200 p-4'>
        <div className="w-[400px] h-[400px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={300} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={180}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className='list-disc flex flex-col justify-center gap-2 text-xl font-semibold'>
          <li>Target Amount - $5000</li>
          <li className='text-[#5F46D9]'>Raised Amount - $3000</li>
          <li className='text-[#D0C8FA]'>Remaining Amount - $2000</li>
        </ul>
      </div>
      <div className='flex items-center justify-center gap-2 text-2xl font-semibold py-8'>
        <p className='text-primary'>Time Left - </p>
        <p className='bg-secondary p-4 text-gray-700'>27 Days  -  18 hours  -  52 Minutes</p>
      </div>
    </div>
  );
};

export default TargetVsRaisedAmount;
