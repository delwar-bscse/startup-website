import { baseApi } from "@/Redux/baseApi";

const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        console.log({ accessToken });

        // if (!accessToken) {
        //   console.error("Access token not found.");
        // }
        return {
          url: "/projects/",
          method: "get",
          //   headers: {
          //     "content-type": "application/json",
          //     authorization: accessToken,
          //   },
        };
      },
      providesTags: ["projects"],
    }),

    getMyProject: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/projects/own",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["projects"],
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetMyProjectQuery } = projectsApi;
