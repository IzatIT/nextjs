import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store/store";
import { authSlice } from '@/store/slices/auth-slice'

export const UseActions = () => {
    const AllActions = {
        ...authSlice.actions,
    };

    const dispatch = useDispatch<AppDispatch>();

    return bindActionCreators(AllActions, dispatch);
};
