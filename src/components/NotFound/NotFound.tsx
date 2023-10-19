import {Link} from "react-router-dom";


function NotFound() {
    return (
        <div>
            <h1>This is page 404</h1>
            <Link to="/">Return to home page</Link>
        </div>
    );
}

export default NotFound;
