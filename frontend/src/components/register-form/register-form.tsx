import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../baseSlice";
import { UnknownAction } from "@reduxjs/toolkit";
import { setIsShowing } from "../login-register-modal/loginRegisterModalSlice";


type Inputs = {
    Nickname: string;
    Password: string;
    ConfirmPassword: string;
}


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs>();
    const dispatch = useDispatch();


    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        // console.log(data)
        dispatch(registerUser({ nick: data.Nickname, password: data.Password }) as unknown as UnknownAction);
        dispatch(setIsShowing(false));
    }

    return (
        <Card component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Register</Typography>
                <TextField 
                    placeholder="Nickname" 
                    type="text"
                    label="Nickname"
                    error={Boolean(errors.Nickname)}
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
                    helperText={errors.Nickname && "Min length must be 4"}
                    {...register("Password", {
                        minLength: 4,
                        required: true,
                    })}
                />
                <TextField 
                    placeholder="Repeat password" 
                    type="password"
                    autoComplete='off'
                    label="Repeat password"
                    error={Boolean(errors.ConfirmPassword)}
                    {...register("ConfirmPassword", {
                        minLength: 4,
                        required: true,
                        validate: {
                            matchesPreviousPassword: (value) => {
                                const { Password } = getValues();
                                return Password === value || "Passwords must match";
                            }
                        }
                    })}
                />
                <Button type="submit" variant="contained" fullWidth>Register</Button>
            </CardContent>
        </Card>
    );
}