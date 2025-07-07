import { baseApi } from "@/Redux/baseApi";

const utilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuantityCounts: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        console.log({ accessToken });

        // if (!accessToken) {
        //   console.error("Access token not found.");
        // }
        return {
          url: "/users/qty-count",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["utilities"],
    }),
    contactUs: builder.mutation({
      query: (data) => {
        // const token = localStorage.getItem("createUserToken");
        //  console.log("vetifyOtpToken", token);
        return {
          url: "/users/get-in-touch",
          method: "POST",
          body: data,
          headers: {
            "content-type": "application/json",
            // token: token,
          },
        };
      },
      invalidatesTags: ["utilities"],
    }),
    getTermsAndConditions: builder.query({
      query: () => {
        return {
          url: "/legal/tc",
          method: "get",
        };
      },
      providesTags: ["utilities"],
    }),
    getPrivacyPolicy: builder.query({
      query: () => {
        return {
          url: "/legal/tc",
          method: "get",
        };
      },
      providesTags: ["utilities"],
    }),
    getFAQs: builder.query({
      query: () => {
        return {
          url: "/legal/tc",
          method: "get",
        };
      },
      providesTags: ["utilities"],
    }),
  }),
});

export const {
  useGetQuantityCountsQuery,
  useContactUsMutation,
  useGetTermsAndConditionsQuery,
} = utilityApi;
