// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.tsx'
import NoPage from './pages/nopage.tsx'
import Register from "./pages/register.tsx";

function BaseRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BaseRouter
