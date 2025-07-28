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

    getMyInvestedProject: builder.query({
      query: () => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: "/stripe/my-invested-projects",
          method: "get",
          headers: {
            "content-type": "application/json",
            authorization: accessToken,
          },
        };
      },
      providesTags: ["projects"],
    }),

    createProject: builder.mutation({
      query: (data) => {
        const accessToken = localStorage.getItem("accessToken");
        console.log("create project api data:", data);
        return {
          url: "/projects/",
          method: "post",
          body: data,
          headers: {
            // "Content-Type": "multipart/form-data",
            authorization: accessToken,
          },
        };
      },
      invalidatesTags: ["projects"],
    }),

    getProjectDetails: builder.query({
      query: (projectId) => {
        const accessToken = localStorage.getItem("accessToken");
        return {
          url: `/projects/details/${projectId}`,
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

export const {
  useGetAllProjectsQuery,
  useGetMyProjectQuery,
  useCreateProjectMutation,
  useGetMyInvestedProjectQuery,
  useGetProjectDetailsQuery,
} = projectsApi;
