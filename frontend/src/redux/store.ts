import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "../components/baseSlice";
import loginRegisterModalReducer from "../components/login-register-modal/loginRegisterModalSlice";
import fileUploadModalReducer from "../components/file-upload-modal/fileUploadModalSlice";
import listOfFilesReducer from "../components/list-of-files/listOfFilesSlice";
import fileShareModalReducer from "../components/file-share-modal/fileShareModalSlice";

const store = configureStore({
    reducer: {
        base: baseReducer,
        authModal: loginRegisterModalReducer,
        uploadModal: fileUploadModalReducer,
        listOfFiles: listOfFilesReducer,
        shareModal: fileShareModalReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
});

export type IRootState = ReturnType<typeof store.getState>;
export { store };
