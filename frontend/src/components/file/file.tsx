import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setIsShowing } from '../file-share-modal/fileShareModalSlice';
import { setSelectedFileId } from '../baseSlice';
import { deleteFile } from '../list-of-files/listOfFilesSlice';
import { UnknownAction } from '@reduxjs/toolkit';
import { setIsShowing as setDownlaodModalIsShowing, setFileName, setPassword } from "../file-download-modal/fileDownloadModalSlice";
    

export default function FileComponent(props: {
    _id: string;
    name: string;
    createdAt: string;
    password?: string;
}) {
    const { _id, name, createdAt, password } = props;
    const dispatch = useDispatch();

    const handleFileShare = () => {
        dispatch(setIsShowing(true));
        dispatch(setSelectedFileId(_id));
    }

    const handleFileDelete = () => {
        dispatch(deleteFile({fileId: _id, name}) as unknown as UnknownAction);
    }

    const handleFileDownload = () => {
        console.log('download')
        dispatch(setDownlaodModalIsShowing(true));
        dispatch(setFileName(name));
        dispatch(setPassword(password || ""));
    }


    return (
        <Card sx={{ minWidth: 290 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {new Date(createdAt).toDateString()}
            </Typography>
            <Typography variant="h5" component="div">
                {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {_id}
            </Typography>
            <Typography variant="body2">
                Pass: {password ? password : "Not setted yet"}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained' color='primary' size="small" onClick={handleFileDownload}>Download</Button>
            <Button variant='contained' color='error' size="small" onClick={handleFileDelete}>Delete</Button>
            <Button variant='contained' color='secondary' size="small" onClick={handleFileShare}>Share</Button>
        </CardActions>
        </Card>
    );
}