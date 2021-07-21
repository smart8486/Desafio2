import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'

// Components
import SideBar from './components/SideBar'

// Pages
import ClientScreen from './pages/ClientScreen'
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen'

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="browser-container">
                <SideBar />
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/clients">
                        <ClientScreen />
                    </Route>
                    <Route exact path="/products">
                        <ProductScreen />
                    </Route>
                </Switch>
            </div>
            <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
    )
}
