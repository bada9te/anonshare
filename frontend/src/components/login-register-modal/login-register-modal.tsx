import { Box, Button, IconButton, Tab, Dialog } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import TabContext from '@mui/lab/TabContext';


/* @ts-ignore */
import Identicon from 'react-identicons';
import { TabList, TabPanel } from "@mui/lab";
import LoginForm from "../login-form/login-form";
import RegisterForm from "../register-form/register-form";



export default function LoginRegisterModal(props: {
    type: "Login" | "Register",
    isLoggedIn: boolean
}) {
    const { type, isLoggedIn } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

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
            
            <Dialog onClose={handleClose} open={open} 
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
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
            </Dialog>
        </>
    );
}