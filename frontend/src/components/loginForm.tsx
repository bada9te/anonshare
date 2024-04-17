import { Button, Card, CardContent, TextField, Typography } from "@mui/material";

export default function LoginForm() {
    return (
        <Card>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Login</Typography>
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
                <Button type="submit" variant="contained" fullWidth>Login</Button>
            </CardContent>
        </Card>
    );
}