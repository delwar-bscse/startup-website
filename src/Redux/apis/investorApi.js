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
  }),
});

export const { useGetInvestorsQuery } = investorApi;
