import { Fab, Stack } from "@mui/material";
import FileComponent from "../file/file";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowing } from "../file-upload-modal/fileUploadModalSlice";
import FileUploadModal from "../file-upload-modal/file-upload-modal";
import { IRootState } from "../../redux/store";

const files = [
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },

]


export default function ListOfFiles() {
    const dispatch = useDispatch();
    const accessToken = useSelector((state: IRootState) => state.base.accessToken);


    const showUploadModal = () => {
        dispatch(setIsShowing(true));
    }

    return (
        <>
            <FileUploadModal isLoggedIn={accessToken.length > 0}/>
            <Stack p={3} flexWrap="wrap" gap={3} display="flex" justifyContent="center" alignItems="space-around" flexDirection="row">
                {
                    files.map((file, key) => {
                        return <FileComponent key={key}/>
                    })
                }
            </Stack>
            <Fab color="primary" aria-label="add" sx={{ position: 'fixed', bottom: '15px', right: '15px' }} onClick={showUploadModal}>
                <Add />
            </Fab>
        </>
    );
}