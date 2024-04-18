import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCreateUser, httploginUser } from "../requests/user.requests";


const initialState = {
    user: {
        _id: "",
        nick: "",
        files: []
    },
    accessToken: ""
}

export const registerUser = createAsyncThunk(
    'BASE_SLICE/register-user',
    async(userData: {nick: string, password: string}) => {
        return await httpCreateUser(userData);
    }
);

export const loginUser = createAsyncThunk(
    'BASE_SLICE/login-user',
    async(userData: {nick: string, password: string}) => {
        return await httploginUser(userData);
    }
)


const baseSlice = createSlice({
    name: "BASE_SLICE",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.user = action.payload.data.user;
                state.accessToken = action.payload.data.token;
            });
    }
});


const { reducer, actions } = baseSlice;

export default reducer;


export const {
    setUser,
} = actions;