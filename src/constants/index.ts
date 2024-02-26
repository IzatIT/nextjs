export const BASE_API =
    process.env.NEXT_PUBLIC_DEV === "false" ?
        process.env.NEXT_PUBLIC_PRODUCTION_API :
        process.env.NEXT_PUBLIC_TEST_API

export const METHODS = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE"
}