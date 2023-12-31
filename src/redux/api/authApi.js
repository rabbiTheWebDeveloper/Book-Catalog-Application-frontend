import { baseApi } from "./baseApi"


const AUTH_URL = "/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        data: loginData
      }),
      invalidatesTags: ["user"]
    }),
    userRegister: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: loginData
      }),
      invalidatesTags: ["user"]
    }),
  }),

})

export const { useUserLoginMutation, useUserRegisterMutation } = authApi