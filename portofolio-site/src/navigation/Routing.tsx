import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout";
import Bot from "../pages/projects/bot";
import Dashboard from "../pages/projects/dashboard";
import Frank from "../pages/projects/frank";
import Php from "../pages/projects/php";
import React from "../pages/projects/react";
import Roos from "../pages/projects/roos";
import Spa from "../spa";

function Routing() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Spa />}></Route>
        <Route path={"/bot"} element={<Bot />}></Route>
        <Route path={"/dashboard"} element={<Dashboard />}></Route>
        <Route path={"/frank"} element={<Frank />}></Route>
        <Route path={"/php"} element={<Php />}></Route>
        <Route path={"/react"} element={<React />}></Route>
        <Route path={"/roos"} element={<Roos />}></Route>
      </Routes>
    </Layout>
  );
}

export default Routing;
