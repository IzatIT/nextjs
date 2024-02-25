"use client"
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./api";
import authSlice from "./slices/auth-slice";

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    auth: authSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)