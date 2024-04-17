    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';

    const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

    export default function FileComponent() {
    return (
        <Card sx={{ minWidth: 290 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {new Date().toDateString()}
            </Typography>
            <Typography variant="h5" component="div">
                Title
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Description
            </Typography>
            <Typography variant="body2">
                Long description
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant='contained' color='primary' size="small">Download</Button>
            <Button variant='contained' color='error' size="small">Delete</Button>
            <Button variant='contained' color='secondary' size="small">Share</Button>
        </CardActions>
        </Card>
    );
    }