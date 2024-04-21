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

export const deleteFile = createAsyncThunk(
    'LIST_OF_FILES/delete', 
    async(input: {fileId: string, name: string}) => {
        return await httpDeleteFile(input.fileId, input.name);
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
                const f = action.payload.data.file;
                /* @ts-ignore */
                console.log(action.payload.data)
                state.files.push({...f, fileName: f.filename, _id: action.payload.data._id})
            })
            .addCase(fetchListOfFiles.fulfilled, (state, action) => {
                /* @ts-ignore */
                state.files = action.payload.data.files
            })
            .addCase(deleteFile.fulfilled, (state, action) => {
                const files = JSON.parse(JSON.stringify(current(state.files))) as TFileFromServer[];
                state.files = files.filter(file => file._id !== action.meta.arg.fileId);
            })
    }
});


const { reducer, actions } = listOfFilesSlice;

export default reducer;
export const {
    setFiles,
} = actions;
