import { Dialog } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { setIsShowing } from "./fileShareModalSlice";

import ShareForm from "../share-form/share-form";



export default function FileShareModal() {
    const isShowing = useSelector((state: IRootState) => state.shareModal.isShowing);
    const dispatch = useDispatch();

    const handleClose = () => dispatch(setIsShowing(false));


    return (
        <Dialog onClose={handleClose} open={isShowing} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ShareForm/>
        </Dialog>
    );
}