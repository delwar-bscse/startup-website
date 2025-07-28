/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Link from "next/link";
import { useGetInvestorsQuery } from "@/Redux/apis/investorApi";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import dayjs from "dayjs";

//   {
//     name: "John Doe",
//     email: "johndoe23@gmail.com",
//     amount: "300$",
//     shareholder: "10%",
//     date: "14/2/2025",
//     profileUrl: Profile,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
//   {
//     name: "John Doe",
//     email: "johndoe23@gmail.com",
//     amount: "300$",
//     shareholder: "10%",
//     date: "14/2/2025",
//     profileUrl: Profile,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
//   {
//     name: "John Doe",
//     email: "johndoe23@gmail.com",
//     amount: "300$",
//     shareholder: "10%",
//     date: "14/2/2025",
//     profileUrl: Profile,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
//   {
//     name: "John Doe",
//     email: "johndoe23@gmail.com",
//     amount: "300$",
//     shareholder: "10%",
//     date: "14/2/2025",
//     profileUrl: Profile,
//   },
//   {
//     name: "Jane Smith",
//     email: "janesmith23@gmail.com",
//     amount: "250$",
//     shareholder: "8%",
//     date: "15/3/2025",
//     profileUrl: Profile2,
//   },
// ];

const InvestorsTable: FC = () => {
  const { data: investorsData, isLoading: investorsLoading } =
    useGetInvestorsQuery({});
  const investors = investorsData?.data;
  console.log("investorsData", investors);

  if (investorsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-auto py-4 px-2">
      <h2 className="text-3xl md:text-4xl lg:text-5xl py-4 font-bold text-gray-700">
        Investor List
      </h2>
      {investors && investors.length > 0 ? (
        <div className="w-full py-1 overflow-x-auto">
          <table
            className="maxWidth min-w-[678px] table-auto bg-white"
            style={{ borderCollapse: "collapse", width: "100%" }}
          >
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Investors
                </th>
                {/* <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Email
                </th> */}
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Amount
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Shareholder
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Date
                </th>
                <th className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md lg:text-base font-light">
              {investors.map(
                (
                  investor: {
                    equity: ReactNode;
                    timestamp: ReactNode;
                    investorId: {
                      _id: any;
                      profileImg: string | StaticImport;
                      name: string;
                    };
                    name:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    email:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    amount:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    shareholder:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                    date:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<
                          | string
                          | number
                          | bigint
                          | boolean
                          | ReactPortal
                          | ReactElement<
                              unknown,
                              string | JSXElementConstructor<any>
                            >
                          | Iterable<ReactNode>
                          | null
                          | undefined
                        >
                      | null
                      | undefined;
                  },
                  index: number
                ) => (
                  <tr key={index}>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3 flex items-center">
                      <Image
                        src={investor?.investorId.profileImg}
                        width={400}
                        height={400}
                        alt={investor?.investorId.name}
                        className="w-[30px] lg:w-[40px] xl:w-[48px] h-[30px] lg:h-[40px] xl:h-[48px] rounded-full border-2 border-primary"
                      />
                      <span className="ml-2">{investor?.investorId.name}</span>
                    </td>
                    {/* <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {investor.email}
                    </td> */}
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {investor.amount}
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {investor.equity}
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 px-1 lg:px-3">
                      {typeof investor.timestamp === "string" ||
                      typeof investor.timestamp === "number" ||
                      investor.timestamp instanceof Date
                        ? dayjs(investor.timestamp).format("YYYY-MM-DD HH:mm")
                        : ""}
                    </td>
                    <td className="py-1 md:py-2 lg:py-3 w-24 lg:w-30">
                      <Link
                        href={`/entrepreneur/investors/${investor?.investorId?._id}`}
                        className="bg-primary2 block text-center text-gray-600 font-semibold py-1 md:py-2 w-full rounded-md"
                      >
                        See Profile
                      </Link>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-red-400">No Investors Found</p>
      )}
    </div>
  );
};

export default InvestorsTable;
