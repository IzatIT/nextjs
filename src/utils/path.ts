const createUrl = (url: string) => `/api/v1/${url}`

export class Path {
    static Auth = class {
        static login = createUrl("auth");
        static register = createUrl("register");
        static getMe = (id: number) => createUrl(`getme/${id}`);
        static refreshToken = createUrl("refreshToken")
    }
}