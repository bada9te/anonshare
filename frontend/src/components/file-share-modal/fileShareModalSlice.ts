import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isShowing: false,
}


const fileShareModalSlice = createSlice({
    name: "SHARE_MODAL",
    initialState,
    reducers: {
        setIsShowing: (state, action) => {
            state.isShowing = action.payload;
        },
    }
});

const { reducer, actions } = fileShareModalSlice;

export default reducer;

export const {
    setIsShowing
} = actions;
