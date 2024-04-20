import { Box, Button, IconButton, Tab, Dialog, DialogContent } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { setIsShowing } from "./fileUploadModalSlice";
import { Add } from "@mui/icons-material";
import { useState } from "react";
import { createFile } from "../list-of-files/listOfFilesSlice";
import { UnknownAction } from "@reduxjs/toolkit";



export default function FileUploadModal(props: {
    isLoggedIn: boolean
}) {
    const isShowing = useSelector((state: IRootState) => state.uploadModal.isShowing);
    const userId = useSelector((state: IRootState) => state.base.user._id);
    const dispatch = useDispatch();
    const [dragIsOver, setDragIsOver] = useState(false);

    const handleClose = () => dispatch(setIsShowing(false));


    // d n d
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragIsOver(true);
    }

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragIsOver(false);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragIsOver(false);

        // Fetch the file
        dispatch(createFile({
            file: e.dataTransfer.files[0], 
            ownerId: userId
        }) as unknown as UnknownAction);
        dispatch(setIsShowing(false));
    }


    return (
        <Dialog onClose={handleClose} open={isShowing} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            fullWidth
        >
            <DialogContent>
                <Box onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} sx={{ 
                    margin: 3, 
                    minHeight: '400px', 
                    border: '3px dashed black', 
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: dragIsOver ? "lightgray" : "white"
                }}>
                    <Add fontSize="large"/>
                </Box>
            </DialogContent>
        </Dialog>
    );
}