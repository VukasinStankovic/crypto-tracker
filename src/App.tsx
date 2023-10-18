import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Favourites from "./pages/Favorites/Favorites";
import NotFound from "./components/NotFound/NotFound";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Favorites from "./pages/Favorites/Favorites";
import Details from "./pages/Details/Details";
import Navbar from "./components/Header/Navbar/Navbar";

export default function App() {
    return (
        <div className="container-xxl border border-danger d-flex flex-column mh-100">
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" index={true} element={<Home/>}/>
                    <Route path="/favorites" element={
                        <ProtectedRoute
                            element={<Favorites/>}
                            isLoggedIn={true} //todo: zameni sa pravom vrednoscu
                        />
                    }/>
                    <Route path="/details/:symbol" element={<Details/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
