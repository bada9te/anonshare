import { useDispatch } from "react-redux";
import FileDownloadModal from "../components/file-download-modal/file-download-modal";
import { useEffect } from "react";
import { setFileName, setIsShowing, setPassword } from "../components/file-download-modal/fileDownloadModalSlice";
import { useParams } from "react-router-dom";
import { httpGetFileById } from "../requests/file.requests";



export default function DownloadPAGE() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        const f = async(id: string) => {
            await httpGetFileById(id).then(({data}) => {
                dispatch(setIsShowing(true));
                dispatch(setFileName(data.file.fileName));
                dispatch(setPassword(data.file.password));
            });
        }
        if (id) {
            f(id);
        }
    }, [id]);

    return (
        <>
            <FileDownloadModal/>
        </>
    );
}