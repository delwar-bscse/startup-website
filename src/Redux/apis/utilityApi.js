import { baseApi } from "@/Redux/baseApi";

const utilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTotalCounts: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        console.log({ accessToken });

        // if (!accessToken) {
        //   console.error("Access token not found.");
        // }
        return {
          url: "/users/total-counts",
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
  }),
});

export const { useGetTotalCountsQuery, useContactUsMutation } = utilityApi;
