import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import OverMij from "../pages/overMij";
import Stage from "../pages/stage";
import Realisaties from "../pages/realisaties";
import Layout from "../pages/layout";
import Bot from "../pages/projects/bot";
import Dashboard from "../pages/projects/dashboard";
import Frank from "../pages/projects/frank";
import Php from "../pages/projects/php";
import React from "../pages/projects/react";
import Roos from "../pages/projects/roos";

function Routing() {
    return (
        <Layout>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/over-mij"} element={<OverMij/>}></Route>
                <Route path={"/stage"} element={<Stage/>}></Route>
                <Route path={"/realisaties"} element={<Realisaties/>}></Route>
                <Route path={"/bot"} element={<Bot/>}></Route>
                <Route path={"/dashboard"} element={<Dashboard/>}></Route>
                <Route path={"/frank"} element={<Frank/>}></Route>
                <Route path={"/php"} element={<Php/>}></Route>
                <Route path={"/react"} element={<React/>}></Route>
                <Route path={"/roos"} element={<Roos/>}></Route>
            </Routes>
        </Layout>
    )
}

export default Routing;