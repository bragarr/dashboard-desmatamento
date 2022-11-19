import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    )
}