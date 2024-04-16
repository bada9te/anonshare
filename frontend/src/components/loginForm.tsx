import { Button, Card, CardContent, CardHeader, TextField, Typography } from "@mui/material";

export default function LoginForm() {
    return (
        <Card sx={{ 
            maxWidth: '500px', 
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, 50%)'
        }}>
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