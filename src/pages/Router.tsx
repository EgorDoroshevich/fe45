import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import RegistrationConfirmation from "./RegistrationConfirmation";
import Header from "src/components/Header";
import SignIn from "./SignIn";

export enum RoutesList  {
    Home = '/',
    SignUp = '/sign-up', 
    SignIn = '/sign-in',
    RegistrationConfirmation = '/sign-up/confirm',
    Default = '*',

}

const Router = () => {
return <BrowserRouter>
<Routes> 
 <Route path={RoutesList.Home} element ={ <Header />}>
<Route  path={RoutesList.Home} element = {<Home />} />
<Route path={RoutesList.SignUp} element = {<SignUp/>}/>
<Route path={RoutesList.SignIn} element = {<SignIn/>}/>
<Route path={RoutesList.Default} element = {<Navigate to={RoutesList.Home}/>}
/>
<Route path={RoutesList.RegistrationConfirmation} element = {<RegistrationConfirmation/>}/>
</Route>

</Routes>

</BrowserRouter>
}

export default Router;