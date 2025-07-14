import { baseApi } from "../baseApi";

const legalComplianceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLegalComplianceFields: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/users/ld-field",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
    }),
    updateLegalComplianceInfo: builder.mutation({
      query: (data) => {
        console.log("update financial data", data);
        const token = localStorage.getItem("accessToken");
        return {
          url: "/users/legalCompliance",
          method: "put",
          body: data,
          headers: {
            // "content-type": "application/json",
            authorization: token,
          },
        };
      },
    }),
  }),
});

export const {
  useGetLegalComplianceFieldsQuery,
  useUpdateLegalComplianceInfoMutation,
} = legalComplianceApi;
