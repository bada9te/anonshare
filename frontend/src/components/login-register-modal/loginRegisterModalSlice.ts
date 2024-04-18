import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isShowing: false,
}


const loginRegisterModalSlice = createSlice({
    name: "LOGIN_REGISTER_MODAL",
    initialState,
    reducers: {
        setIsShowing: (state, action) => {
            state.isShowing = action.payload;
        }
    }
});

const { reducer, actions } = loginRegisterModalSlice;

export default reducer;

export const {
    setIsShowing
} = actions;
