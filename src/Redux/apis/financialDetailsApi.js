import { baseApi } from "../baseApi";

const financialDetailsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFinancialDetailsFields: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/users/fd-field",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["financialDetails"],
    }),
    updateFinancialInfo: builder.mutation({
      query: (data) => {
        console.log("update financial data", data);
        const token = localStorage.getItem("accessToken");
        return {
          url: "/users/financialDetails",
          method: "put",
          body: data,
          headers: {
            // "content-type": "application/json",
            authorization: token,
          },
        };
      },
      invalidatesTags: ["financialDetails"],
    }),
  }),
});

export const {
  useGetFinancialDetailsFieldsQuery,
  useUpdateFinancialInfoMutation,
} = financialDetailsApi;
