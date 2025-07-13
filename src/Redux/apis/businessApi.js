import { baseApi } from "../baseApi";

const businessApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getUserProfile: builder.query({
    //   query: () => {
    //     const accessToken = localStorage.getItem("accessToken");
    //     return {
    //       url: "/users/me",
    //       method: "get",
    //       headers: {
    //         "content-type": "application/json",
    //         authorization: accessToken,
    //       },
    //     };
    //   },
    // }),
    getBusinessDetailsFields: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/users/bd-field",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
    }),
    updateBusinessInfo: builder.mutation({
      query: (data) => {
        console.log("update info data", data);
        const token = localStorage.getItem("accessToken");
        return {
          url: "/users/businessInfo",
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
  useGetBusinessDetailsFieldsQuery,
  useUpdateBusinessInfoMutation,
} = businessApi;
