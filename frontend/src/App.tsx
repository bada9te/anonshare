import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ListOfFilesPAGE from "./pages/ListOfFilesPAGE";
import LandingPage from "./pages/LandingPAGE";


const router = createBrowserRouter([
    { path: '/',       element: <LandingPage/>    },
    { path: '/files',  element: <ListOfFilesPAGE/>},
]);

function App() {    
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
