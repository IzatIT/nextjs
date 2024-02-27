"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import { authReducer } from "./slices/auth-slice";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)