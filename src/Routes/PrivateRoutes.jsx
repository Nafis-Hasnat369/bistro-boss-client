import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <div className="loading loading-dots loading-lg"></div>;
    if (user) return children;
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoutes;