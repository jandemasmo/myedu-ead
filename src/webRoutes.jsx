import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Website } from "./pages/Website/Website";

const webRoutes = () => {


    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Website/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default webRoutes;