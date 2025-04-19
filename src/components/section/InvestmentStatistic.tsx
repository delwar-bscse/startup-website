"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";

// Define types for the data structure
interface ChartData {
  x: string;
  y: number;
}

// Dummy data for Chart - Year
const dataYear: ChartData[] = [
  { x: "Jan", y: 30 },
  { x: "Feb", y: 70 },
  { x: "Mar", y: 20 },
  { x: "Apr", y: 40 },
  { x: "May", y: 15 },
  { x: "Jun", y: 70 },
  { x: "Jul", y: 60 },
  { x: "Aug", y: 90 },
  { x: "Sep", y: 10 },
  { x: "Oct", y: 60 },
  { x: "Nov", y: 90 },
  { x: "Dec", y: 70 },
];

// Custom Tooltip Function
const renderCustomTooltip = ({ payload }: TooltipProps<string, number>) => {
  if (payload && payload.length) {
    const { x, y } = payload[0].payload as ChartData; // Access the specific data point
    return (
      <div
        style={{
          backgroundColor: "white",
          color: "rgba(84, 242, 197, 1)",
          padding: "8px",
          borderRadius: "5px",
          fontSize: "14px",
          maxWidth: "200px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds a subtle shadow
        }}
      >
        <p className=" py-2 px-5 rounded-sm bg-[#54F2C5] text-white font-semibold text-lg">
          {x}: {y}
        </p>
      </div>
    );
  }
  return null;
};

//---------------------------------------- Total Revenue Component ----------------------------------------//
const InvestmentStatistic = () => {
  return (
    <div className="p-2 border-2 border-gray-200 rounded-md">
      <div className="flex justify-end pb-3">
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
      <div className="w-full p-3">
        <ResponsiveContainer width="100%" height={353}>
          <AreaChart
            data={dataYear}
            syncId="anyId"
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" vertical={false} horizontal={true} />
            <XAxis
              dataKey="x"
              tick={{ fontSize: 14 }}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={20} />
            <Tooltip content={renderCustomTooltip} />

            {/* Gradient fill definition */}
            <defs>
              <linearGradient id="gradientColor" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="1%" stopColor="#54F2C5" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#54F2C5" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* Area with gradient fill */}
            <Area
              type="monotone"
              dataKey="y"
              stroke="#54F2C5"
              strokeWidth={2}
              fill="url(#gradientColor)" // Apply gradient by referencing its ID
              activeDot={{
                fill: "#54F2C5", // Dot fill color
                stroke: "white", // Dot borders color
                strokeWidth: 6, // Dot borders width
                r: 10, // Dot size (radius)
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InvestmentStatistic;
