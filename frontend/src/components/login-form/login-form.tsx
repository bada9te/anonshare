import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUser } from "../baseSlice";
import { UnknownAction } from "@reduxjs/toolkit";
import { setIsShowing } from "../login-register-modal/loginRegisterModalSlice";


type Inputs = {
    Nickname: string;
    Password: string;
}


export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const dispath = useDispatch();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        // console.log(data)
        
        dispath(loginUser({ nick: data.Nickname, password: data.Password }) as unknown as UnknownAction);
        dispath(setIsShowing(false));
    }

    return (
        <Card component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Login</Typography>
                <TextField 
                    placeholder="Nickname" 
                    type="text"
                    label="Nickname"
                    error={Boolean(errors.Nickname)}
                    autoFocus
                    helperText={errors.Nickname && "Min length must be 4"}
                    {...register("Nickname", {
                        minLength: 4,
                        required: true,
                    })}
                />
                <TextField 
                    placeholder="Password" 
                    type="password"
                    label="Password"
                    autoComplete='off'
                    error={Boolean(errors.Password)}
                    helperText={errors.Password && "Min length must be 4"}
                    {...register("Password", {
                        minLength: 4,
                        required: true,
                    })}
                />
                <Button type="submit" variant="contained" fullWidth>Login</Button>
            </CardContent>
        </Card>
    );
}