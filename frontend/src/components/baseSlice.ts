import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCreateUser } from "../requests/user.requests";


const initialState = {
    user: {
        nick: "",
        files: []
    }
}

export const registerUser = createAsyncThunk(
    'register-user',
    async(userData: {nick: string, password: string}) => {
        return await httpCreateUser(userData);
    }
);


const baseSlice = createSlice({
    name: "BASE_SLICE",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});


const { reducer, actions } = baseSlice;

export default reducer;


export const {
    setUser,
} = actions;