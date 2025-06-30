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
            Authorization: `Bearer ${accessToken}`,
          },
        };
      },
      providesTags: ["utilities"],
    }),
  }),
});

export const { useGetTotalCountsQuery } = utilityApi;
