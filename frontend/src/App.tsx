import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ListOfFilesPAGE from "./pages/ListOfFilesPAGE";
import LoginPAGE from "./pages/LoginPAGE";
import LogoutPAGE from "./pages/LogoutPAGE";


const router = createBrowserRouter([
    { path: '/',       element: <LoginPAGE/>      },
    { path: '/files',  element: <ListOfFilesPAGE/>},
    { path: '/login',  element: <LoginPAGE/>      },
    { path: '/logout', element: <LogoutPAGE/>     },
]);

function App() {    
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
