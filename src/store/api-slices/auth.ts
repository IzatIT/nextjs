import { api } from "../api";
import { Path } from "@/utils";

export const authApiSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: Path.Auth.signIn,
                method: "POST",
                body: { ...credentials },
            }),
        }),
        logOut: builder.mutation({
            query: () => ({
                url: Path.Auth.signOut,
                method: "POST",
            }),
        }),
        registration: builder.mutation({
            query: (data) => ({
                url: Path.Auth.registrationAuth,
                method: "POST",
                body: { ...data },
            }),
        }),
        otpVerification: builder.mutation({
            query: (data) => ({
                url: Path.Auth.OtpVerification,
                method: "POST",
                body: { ...data },
            }),
        }),
    }),
});

export const {
    useLoginMutation,
    useLogOutMutation,
    useRegistrationMutation,
    useOtpVerificationMutation,
} = authApiSlice;
