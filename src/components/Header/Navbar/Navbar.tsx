import { Link } from "react-router-dom";
import Home from "../../../pages/Home/Home";
import {NavbarProps} from "../../../types/types";

// todo: dovrsi navbar
function Navbar({isLoggedIn, handleOnLogin} : NavbarProps) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Crypto tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link link-opacity-50-hover" to="/">Home</Link>
                        <Link className="nav-link link-opacity-50-hover" to="favorites">Favorites</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;