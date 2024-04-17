import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";


type Inputs = {
    Nickname: string;
    Password: string;
    ConfirmPassword: string;
}


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        console.log(data)
    }

    return (
        <Card component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Register</Typography>
                <TextField 
                    placeholder="Nickname" 
                    type="text"
                    label="Nickname"
                    {...register("Nickname", {
                        minLength: 4,
                        required: true,
                    })}
                />
                <TextField 
                    placeholder="Password" 
                    type="password"
                    label="Password"
                    {...register("Password", {
                        minLength: 4,
                        required: true,
                    })}
                />
                <TextField 
                    placeholder="Repeat password" 
                    type="password"
                    label="Repeat password"
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