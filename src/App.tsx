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
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

function App() {
    const queryClient = new QueryClient();

    const handleLogin = () => {
    };

    return (
        <QueryClientProvider client={queryClient}>
            <div className="container-xxl d-flex flex-column mh-100">
                <BrowserRouter>
                    <Navbar isLoggedIn={true} handleOnLogin={handleLogin}/>
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
        </QueryClientProvider>
    );
}

export default App;
