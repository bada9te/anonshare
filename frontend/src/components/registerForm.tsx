import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

export default function RegisterForm() {
    return (
        <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Register</Typography>
                <TextField 
                    placeholder="Nickname" 
                    type="text"
                    label="Nickname"
                />
                <TextField 
                    placeholder="Password" 
                    type="password"
                    label="Password"
                />
                <TextField 
                    placeholder="Repeat password" 
                    type="password"
                    label="Repeat passwor"
                />
                <Button type="submit" variant="contained" fullWidth>Register</Button>
            </CardContent>
        </Card>
    );
}