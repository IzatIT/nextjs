"use client"
import { METHODS } from "@/constants";
import { Path } from "@/utils";
import { api } from "../api";

const authSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        auth: builder.mutation<IAuthResponse, IAuthRequest>({
            query: (body) => ({
                method: METHODS.POST,
                url: Path.Auth.login,
                body
            }),
            invalidatesTags: ["Auth"]
        }),
        register: builder.mutation({
            query: (body) => ({
                method: METHODS.POST,
                url: Path.Auth.register,
                body,
            })
        }),
        getMe: builder.query({
            query: (id) => ({
                method: METHODS.GET,
                url: Path.Auth.getMe(id),
            }),
            providesTags: ["Auth"]
        })
    })
})


export const {

} = authSlice