import { Stack } from "@mui/material";
import FileComponent from "./file";

const files = [
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },
    {
        name: "A",
        createdAt: new Date()
    },

]


export default function ListOfFiles() {
    return (
        <Stack p={3} flexWrap="wrap" gap={3} display="flex" justifyContent="center" alignItems="space-around" flexDirection="row">
            {
                files.map((file, key) => {
                    return <FileComponent key={key}/>
                })
            }
        </Stack>
    );
}