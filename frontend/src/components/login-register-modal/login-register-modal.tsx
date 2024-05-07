import { Box, Button, IconButton, Tab, Dialog, DialogContent } from "@mui/material";
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';


/* @ts-ignore */
import Identicon from 'react-identicons';
import { TabList, TabPanel } from "@mui/lab";
import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/store";
import { setIsShowing } from "./loginRegisterModalSlice";
import { UnknownAction } from "@reduxjs/toolkit";
import { logoutUser } from "../baseSlice";
import Cookies from "js-cookie";



export default function LoginRegisterModal(props: {
    isLoggedIn: boolean
}) {
    const { isLoggedIn } = props;
    const isShowing = useSelector((state: IRootState) => state.authModal.isShowing);
    const dispatch = useDispatch();

    const handleOpen = () => dispatch(setIsShowing(true));
    const handleClose = () => dispatch(setIsShowing(false));

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleLogoutUser = () => {
        dispatch(logoutUser(Cookies.get("token") as string) as unknown as UnknownAction);
    }

    return (
        <>
            {
                (() => {
                    if (isLoggedIn) {
                        return (
                            <IconButton onClick={handleOpen} sx={{ p: 0, backgroundColor: 'white', padding: 1, ":hover": { backgroundColor: 'white' } }}>
                                <Identicon string="randomness" size={25}/>
                            </IconButton>
                        );
                    } else {
                        return (
                            <Button onClick={handleOpen} color="secondary" sx={{ p: 1 }} variant="contained">Login</Button>
                        );
                    }
                })()
            }
            
            <Dialog onClose={handleClose} open={isShowing} 
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {
                    isLoggedIn
                    ?
                    <DialogContent>
                        <Button variant="contained" onClick={handleLogoutUser}>Logout</Button>
                    </DialogContent>
                    :
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Login" value="1" />
                            <Tab label="Register" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1"><LoginForm/></TabPanel>
                        <TabPanel value="2"><RegisterForm/></TabPanel>
                    </TabContext>
                }
            </Dialog>
        </>
    );
}