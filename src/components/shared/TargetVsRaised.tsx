"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import dayjs from "dayjs";

interface Project {
  fundingGoal: number;
  fundsRaised: number;
  deadLine: string;
}

interface TargetVsRaisedAmountProps {
  project: Project;
}

const COLORS = ["#5F46D9", "#D0C8FA"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TargetVsRaisedAmount: React.FC<TargetVsRaisedAmountProps> = ({
  project,
}) => {
  const [outerRadius, setOuterRadius] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOuterRadius(100);
      } else if (window.innerWidth < 1024) {
        setOuterRadius(120);
      } else if (window.innerWidth < 1280) {
        setOuterRadius(200);
      } else {
        setOuterRadius(200);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prepare the data for the chart using project.fundingGoal and project.fundsRaised
  const chartData = [
    { name: "Raised Amount", value: project.fundsRaised },
    {
      name: "Remaining Amount",
      value: project.fundingGoal - project.fundsRaised,
    },
  ];

  const daysLeft = dayjs(project.deadLine).diff(dayjs(), "day");

  return (
    <div className="maxWidth">
      <h2 className="text-xl sm:text-3xl md:text-5xl font-bold pb-8 text-gray-700">
        Targeted Vs Raised Amount
      </h2>
      <div className="">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 border border-gray-200 p-4">
          <div className="w-[260px] md:w-[300px] lg:w-[400px] h-[260px] md:[300px] lg:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={outerRadius}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="ps-4 list-disc flex flex-col justify-center gap-2 text-xl font-semibold">
            <li>Target Amount - ${project.fundingGoal}</li>
            <li className="text-[#5F46D9]">
              Raised Amount - ${project.fundsRaised}
            </li>
            <li className="text-[#D0C8FA]">
              Remaining Amount - ${project.fundingGoal - project.fundsRaised}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-xl md:text-2xl font-semibold py-8 sm:gap-4">
        <p className="text-primary">Time Left</p>
        <p className="bg-secondary p-4 text-gray-700">
          {daysLeft < 0 ? "Project Ended" : `${daysLeft} Days Left`}
        </p>
      </div>
    </div>
  );
};

export default TargetVsRaisedAmount;
