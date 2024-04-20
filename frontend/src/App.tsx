import { RouterProvider, createBrowserRouter} from "react-router-dom";
import ListOfFilesPAGE from "./pages/ListOfFilesPAGE";


const router = createBrowserRouter([
    { path: '/',  element: <ListOfFilesPAGE/>},
]);

function App() {    
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
