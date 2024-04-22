import { Button, Card, CardContent, Dialog, TextField } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { setIsShowing } from "./fileDownloadModalSlice";
import { useState } from "react";



export default function FileDownloadModal() {
    const { isShowing, name, password } = useSelector((state: IRootState) => state.downloadModal);
    const [inp, setInp] = useState("");
    const dispatch = useDispatch();

    const handleClose = () => dispatch(setIsShowing(false));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInp(e.target.value);
    }

    return (
        <Dialog onClose={handleClose} open={isShowing} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card>
                <CardContent>
                    {
                        password !== ""
                        &&
                        <TextField 
                            placeholder="Password" 
                            type="password"
                            label="Password"
                            autoComplete='off'
                            onChange={handleChange}
                            fullWidth
                        />
                    }
                    { inp === password && <Button fullWidth variant="contained" sx={{ mt: 2 }} href={`${process.env.REACT_APP_SERVER_BASE}/files/download?name=${name}`}>Downlaod</Button> }
                </CardContent>
            </Card>
        </Dialog>
    );
}