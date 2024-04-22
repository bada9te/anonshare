import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ListOfFilesPAGE from "./pages/ListOfFilesPAGE";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshToken } from "./components/baseSlice";
import { UnknownAction } from "@reduxjs/toolkit";
import DownloadPAGE from "./pages/DownloadPAGE";

const router = createBrowserRouter([
    { path: '/',  element: <ListOfFilesPAGE/>},
    { path: '/download/:id', element: <DownloadPAGE/>},
]);

function App() {  
    const dispath = useDispatch();

    useEffect(() => {
        const fetchUserByCookieToken = async(token: string) => {
            dispath(refreshToken(token) as unknown as UnknownAction);
        }

        const token = Cookies.get('token');
        if (token) {
            fetchUserByCookieToken(token);
        }
    }, [dispath]);

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
