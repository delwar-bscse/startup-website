import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/users/me",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["profile"],
    }),
    getPersonalDetailsFields: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/users/pd-field",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
    }),
    updatePersonalInfo: builder.mutation({
      query: (data) => {
        console.log("update info data", data);
        const token = localStorage.getItem("accessToken");
        return {
          url: "/users/personalInfo",
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
  useGetUserProfileQuery,
  useGetPersonalDetailsFieldsQuery,
  useUpdatePersonalInfoMutation,
} = userApi;
