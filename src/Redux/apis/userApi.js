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
    updateUserProfile: builder.mutation({
      query: (data) => {
        console.log("update info data", data);
        const token = localStorage.getItem("accessToken");
        return {
          url: "/users/update-profile",
          method: "put",
          body: data,
          headers: {
            "content-type": "multipart/form-data",
            authorization: token,
          },
        };
      },
      invalidatesTags: "user",
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
      providesTags: "user",
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
      invalidatesTags: "user",
    }),
    getUserDetails: builder.query({
      query: (userId) => {
        console.log("user id", userId);
        const token = localStorage.getItem("accessToken");
        return {
          url: `/users/details/${userId}`,
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: token,
          },
        };
      },
      providesTags: "user",
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useGetPersonalDetailsFieldsQuery,
  useUpdatePersonalInfoMutation,
  useGetUserDetailsQuery,
} = userApi;
