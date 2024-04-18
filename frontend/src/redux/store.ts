import { configureStore } from "@reduxjs/toolkit";
import baseReducer from "../components/baseSlice";

const store = configureStore({
    reducer: {
        base: baseReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
});

export {
    store,
};