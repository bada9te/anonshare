import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "@reduxjs/toolkit";
import { IRootState } from "../../redux/store";
import { updatePassPhrase } from "../list-of-files/listOfFilesSlice";
import { setIsShowing } from "../file-share-modal/fileShareModalSlice";


type Inputs = {
    PassPharase: string;
}


export default function ShareForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const selectedFileId = useSelector((state: IRootState) => state.base.selectedFileId);
    const dispath = useDispatch();

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        //console.log(selectedFileId)
        dispath(updatePassPhrase({ pass: data.PassPharase, fileId: selectedFileId }) as unknown as UnknownAction);
        dispath(setIsShowing(false));
        alert(`http://localhost:3000/download/${selectedFileId}`)
    }

    return (
        <Card component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 2 }}>
                <Typography fontSize={20}>Share</Typography>
                <TextField 
                    placeholder="Pass phrase" 
                    type="text"
                    label="Pass phrase (optional)"
                    error={Boolean(errors.PassPharase)}
                    autoFocus
                    helperText={errors.PassPharase && "Min length must be 4"}
                    {...register("PassPharase", {
                        minLength: 4,
                        required: false,
                    })}
                />
                <Button type="submit" variant="contained" fullWidth>Get link</Button>
            </CardContent>
        </Card>
    );
}