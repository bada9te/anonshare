import { Fab, Stack, Typography } from "@mui/material";
import FileComponent from "../file/file";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowing } from "../file-upload-modal/fileUploadModalSlice";
import FileUploadModal from "../file-upload-modal/file-upload-modal";
import { IRootState } from "../../redux/store";
import FileShareModal from "../file-share-modal/file-share-modal";
import { useEffect } from "react";
import { fetchListOfFiles } from "./listOfFilesSlice";
import { UnknownAction } from "@reduxjs/toolkit";
import { TFileFromServer } from "./types";



export default function ListOfFiles() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state: IRootState) => state.base.accessToken);
    const files = useSelector((state: IRootState) => state.listOfFiles.files);
    const userId = useSelector((state: IRootState) => state.base.user._id);

    const showUploadModal = () => {
        dispatch(setIsShowing(true));
    }

    useEffect(() => {
        if (userId.length > 0) {
            dispatch(fetchListOfFiles() as unknown as UnknownAction);
        }
    }, [userId, dispatch]);

    return (
        <>
            {
                userId.length > 0
                ?
                <>
                    <FileUploadModal isLoggedIn={accessToken.length > 0}/>
                    <FileShareModal/>
                    <Stack p={3} flexWrap="wrap" gap={3} display="flex" justifyContent="center" alignItems="space-around" flexDirection="row">
                        {
                            files.map((file: TFileFromServer, key) => {
                                console.log(file)
                                return <FileComponent 
                                    key={key} 
                                    _id={file._id}
                                    name={file.fileName}
                                    createdAt={file.createdAt}
                                    password={file.password}
                                />
                            })
                        }
                    </Stack>
                    <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: '15px', right: '15px' }} onClick={showUploadModal}>
                        <Add />
                    </Fab>
                </>
                :
                <Typography fontSize={40}>Not authenticated</Typography>
            }
        </>
    );
}