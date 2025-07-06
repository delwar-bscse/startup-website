import { axiosBaseQuery } from "@/utils/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { getBaseUrl } from "@/utils/baseUrl";

export const baseApi = createApi({
  reducerPath: "apis",
  baseQuery: axiosBaseQuery({
    baseUrl: getBaseUrl(),
  }),
  endpoints: () => ({}),
  tagTypes: ["user", "utilities", "projects"],
});
