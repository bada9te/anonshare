import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCreateUser, httpGetNewToken, httpLogoutUser, httploginUser } from "../requests/user.requests";
import Cookies from 'js-cookie';


const initialState = {
    user: {
        _id: "",
        nick: "",
        files: []
    },
    accessToken: "",
    selectedFileId: "",
    selectedFileName: "",
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

export const refreshToken = createAsyncThunk(
    'BASE_SLICE/refresh-token',
    async(token: string) => {
        return await httpGetNewToken(token);
    }
);

export const logoutUser = createAsyncThunk(
    'BASE_SLICE/logout',
    async(token: string) => {
        return await httpLogoutUser(token);
    }
);


const baseSlice = createSlice({
    name: "BASE_SLICE",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setSelectedFileId: (state, action) => {
            state.selectedFileId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.user = action.payload.data.user;
                state.accessToken = action.payload.data.token;
                Cookies.set('token', action.payload.data.refreshToken, { expires: 7, secure: true });
            })
            .addCase(refreshToken.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.user = action.payload.data.user;
                state.accessToken = action.payload.data.token;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state = initialState;
                Cookies.remove("token");
                window.location.reload();
            });
    }
});


const { reducer, actions } = baseSlice;

export default reducer;


export const {
    setUser,
    setSelectedFileId,
} = actions;