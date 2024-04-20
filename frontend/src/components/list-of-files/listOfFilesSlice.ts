import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCreateFile, httpGetFilesByOwnerId, httpUpdateFilePassword } from "../../requests/file.requests";
import { IRootState } from "../../redux/store";


const initialState = {
    files: [],
}

export const createFile = createAsyncThunk(
    'LIST_OF_FILES/create-file',
    async(input: {file: File, ownerId: string}) => {
        return await httpCreateFile(input.file, input.ownerId);
    }
);

export const updatePassPhrase = createAsyncThunk(
    'LIST_OF_FILES/update-passphrase',
    async(input: {fileId: string, pass: string}) => {
        return await httpUpdateFilePassword(input.pass, input.fileId);
    }
);

export const fetchListOfFiles = createAsyncThunk(
    'LIST_OF_FILES/fetch',
    async(_, thunkApi) => {
        return await httpGetFilesByOwnerId((thunkApi.getState() as IRootState).base.user._id);
    }
);


const listOfFilesSlice = createSlice({
    name: "LIST_OF_FILES",
    initialState,
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createFile.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.files.push(action.payload.data.file)
            })
            .addCase(fetchListOfFiles.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.files = action.payload.data.files
            })
    }
});


const { reducer, actions } = listOfFilesSlice;

export default reducer;
export const {
    setFiles,
} = actions;