import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpCreateFile } from "../../requests/file.requests";


const initialState = {
    files: [],
}

export const createFile = createAsyncThunk(
    'LIST_OF_FILES/create-file',
    async(input: {file: File, ownerId: string}) => {
        return await httpCreateFile(input.file, input.ownerId);
    }
);


const listOfFilesSlice = createSlice({
    name: "LIST_OF_FILES",
    initialState,
    reducers: {
        setFiles: (state, action) => {
            state.files = action.payload;
        }
    }
});


const { reducer, actions } = listOfFilesSlice;

export default reducer;
export const {
    setFiles,
} = actions;