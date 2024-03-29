"use client"
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError, } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_API, METHODS } from '@/constants'
import { Path } from '@/utils'
import { logIn, logOut } from './slices/auth-slice'
import { useLocalStorage } from '@/hooks'


const baseQuery = fetchBaseQuery({
    baseUrl: `${BASE_API}`,
    prepareHeaders: (headers: Headers, { getState }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value] = useLocalStorage<IProfile>("profile");
        const accessToken = value?.accessToken
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`);
        }
        return headers
    }
})

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    if (result?.error?.status === 401) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [value, setValue] = useLocalStorage<IProfile>("profile");
        const refreshToken = value?.refreshToken
        const { data } = await baseQuery({
            url: Path.Auth.refreshToken,
            method: METHODS.POST,
            body: { refreshToken }
        },
            api,
            extraOptions
        );
        if (data) {
            api.dispatch(logIn(data))
            setValue(data as IProfile)
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ["Auth"]
});
