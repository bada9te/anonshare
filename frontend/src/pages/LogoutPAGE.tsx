import { Typography } from "@mui/material";

export default function LogoutPAGE() {
    return (
        <Typography sx={{ 
            position: 'absolute', 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '40px',
        }}>
            Logging out...
        </Typography>
    );
}