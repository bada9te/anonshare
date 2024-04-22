import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isShowing: false,
    password: "",
    name: "",
}


const fileDownloadModalSlice = createSlice({
    name: "DOWNLOAD_MODAL",
    initialState,
    reducers: {
        setIsShowing: (state, action) => {
            state.isShowing = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setFileName: (state, action) => {
            state.name = action.payload;
        }
    }
});

const { reducer, actions } = fileDownloadModalSlice;

export default reducer;

export const {
    setIsShowing,
    setPassword,
    setFileName,
} = actions;
