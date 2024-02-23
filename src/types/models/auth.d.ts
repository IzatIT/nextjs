declare interface IAuthRequest {
    password: string;
    login: string;
}

declare interface IAuthResponse {
    refreshToken: string;
    accessToken: string;
    profile: IProfile
}