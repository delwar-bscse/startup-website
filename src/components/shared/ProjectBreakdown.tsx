/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface IndustryData {
  [x: string]: any;
  name: string;
  percentage: number;
}

const COLORS = ["#D93E39", "#43B75D", "#FFAA00"];

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

interface ProjectBreakdownProps {
  industries: IndustryData[];
}

const ProjectBreakdown: React.FC<ProjectBreakdownProps> = ({ industries }) => {
  const [outerRadius, setOuterRadius] = useState(200); // Default size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setOuterRadius(100);
      } else if (window.innerWidth < 1024) {
        setOuterRadius(120);
      } else if (window.innerWidth < 1280) {
        setOuterRadius(180);
      } else {
        setOuterRadius(200);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="maxWidth pb-20">
      <h2 className="text-3xl md:text-5xl font-bold pb-8 text-gray-700">
        Project Breakdown
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 border border-gray-200 p-4">
        <div className="w-[260px] md:w-[300px] lg:w-[400px] h-[260px] md:[300px] lg:h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={300} height={300}>
              <Pie
                data={industries}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={outerRadius}
                fill="#8884d8"
                dataKey="percentage"
              >
                {industries.map((entry, index) => (
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
          {industries.map((industry, index) => {
            return (
              <li key={index} className="text-[#D93E39]">
                <span className="text-gray-700">
                  {industry?.industry.name} -
                </span>{" "}
                {industry.percentage}%
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBreakdown;
