import { FC } from "react";
import InvestmentStatistic from "@/components/section/InvestmentStatistic";
import InvestmentVsEquity from "@/components/section/InvestmentVsEquity";

const InvestorsTable: FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-4">
      <div className="w-full overflow-x-auto p-2 my-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-8 text-gray-700">
          Investment Statistics
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="w-full min-w-[800px]">
            <InvestmentStatistic />
          </div>
        </div>
      </div>
      <div className="w-full p-2 my-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pb-8 text-gray-700">
          Investment vs Equity
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="w-full min-w-[800px]">
            <InvestmentVsEquity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsTable;
