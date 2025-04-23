import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../../pages/shared/loadingPage/loadingPage';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <LoadingPage />;
    }

    // if (user) {
    //     return children;
    // }

    return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouter;