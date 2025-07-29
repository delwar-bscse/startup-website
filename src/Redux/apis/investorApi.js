import { baseApi } from "../baseApi";

const investorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInvestors: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/stripe/my-investors",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["investors"],
    }),
    investOnProject: builder.mutation({
      query: (data) => {
        const accessToken = localStorage.getItem("accessToken");
        console.log("invest on project api data:", data);

        return {
          url: "/stripe/chekout",
          method: "post",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
          body: data,
        };
      },
      invalidatesTags: ["investors"],
    }),
    getMyInvestedIndustries: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/stripe/my-invested-industries",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["investors"],
    }),
    getTopInvestor: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/stripe/top-investors",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["investors"],
    }),
  }),
});

export const {
  useGetInvestorsQuery,
  useInvestOnProjectMutation,
  useGetMyInvestedIndustriesQuery,
  useGetTopInvestorQuery,
} = investorApi;
