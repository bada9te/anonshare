import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { httpCreateFile, httpDeleteFile, httpGetFilesByOwnerId, httpUpdateFilePassword } from "../../requests/file.requests";
import { IRootState } from "../../redux/store";
import { TFileFromServer } from "./types";


const initialState: {
    files: TFileFromServer[];
} = {
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

export const downloadFIle = createAsyncThunk(
    'LIST_OF_FILES/download',
    async(fileId: string) => {
        // TODO: download file http handler
        // return await 
    }
);

export const deleteFile = createAsyncThunk(
    'LIST_OF_FILES/delete', 
    async(fileId: string) => {
        return await httpDeleteFile(fileId);
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
            .addCase(deleteFile.fulfilled, (state, action) => {
                const files = JSON.parse(JSON.stringify(current(state.files))) as TFileFromServer[];
                state.files = files.filter(file => file._id !== action.meta.arg);
            })
    }
});


const { reducer, actions } = listOfFilesSlice;

export default reducer;
export const {
    setFiles,
} = actions;
