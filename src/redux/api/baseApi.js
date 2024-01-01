
import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from "../../helpers/axios/axiosBaseQuery";
import { getBaseUrl } from "../../helpers/config/envConfig";

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: getBaseUrl() }),
  endpoints: () => ({}),
  tagTypes: ['user']
})