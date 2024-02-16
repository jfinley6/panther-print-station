import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import SerialNumbers from "./pages/SerialNumbers";
import ProductionTags from "./pages/ProductionTags";
import CrateTags from "./pages/CrateTags";
import Home from "./pages/Home";
import RMATags from "./pages/RMATags";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Navbar />}>
            <Route index={true} element={<Home />} />
            <Route path="serial-numbers" element={<SerialNumbers />} />
            <Route path="production-tags" element={<ProductionTags />} />
            <Route path="crate-tags" element={<CrateTags />} />
            <Route path="rma-tags" element={<RMATags />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App({ routes }) {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
