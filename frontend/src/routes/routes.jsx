import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import MainLayout from "../componentes/MainLayout";
import FormLogin from "../componentes/LoginForm";
import SignUpForm from '../componentes/SignUpForm'

const RoutesSite = () => {
   return(
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}> 
                    <Route exact path="/" element={<FormLogin/>} />
                    <Route exact path="/signup" element={<SignUpForm/>} />
                </Route>
            </Routes>
       </BrowserRouter>
   )
}

export default RoutesSite;