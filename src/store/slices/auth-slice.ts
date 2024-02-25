"use client"
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
    profile: null | IProfile;
    loggedIn: boolean;
}

const initialState: IInitialState = {
    profile: null,
    loggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: (state) => {
            state.profile = null
            state.loggedIn = false
        },
        logIn: (state, { payload }) => {
            state.loggedIn = true
            state.profile = payload
        }
    }
})

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer