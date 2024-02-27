const createUrl = (url: string) => `/api/v1/${url}`

export class Path {
    static Auth = class {
        static signIn = createUrl("auth/login");
        static signOut = createUrl("auth/logout");
        static refreshToken = createUrl("auth/refresh/token");
        static registrationAuth = createUrl("auth/registration");
        static OtpVerification = createUrl("auth/verify-otp");
    };
}