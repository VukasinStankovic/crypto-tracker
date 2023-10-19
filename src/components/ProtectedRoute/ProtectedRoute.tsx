import {Navigate} from "react-router-dom";
import {ReactElement} from "react";

export default function ProtectedRoute({ isLoggedIn, element }: { isLoggedIn: boolean, element: ReactElement }) {
    return isLoggedIn ? element : <Navigate to="/" replace />;
}
