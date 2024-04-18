import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isShowing: false,
}


const fileUploadModalSlice = createSlice({
    name: "UPLOAD_MODAL",
    initialState,
    reducers: {
        setIsShowing: (state, action) => {
            state.isShowing = action.payload;
        }
    }
});

const { reducer, actions } = fileUploadModalSlice;

export default reducer;

export const {
    setIsShowing
} = actions;
