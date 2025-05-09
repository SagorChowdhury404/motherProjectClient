import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../../pages/shared/loadingPage/loadingPage';
import useAuth from '../../hooks/useAuth/useAuth';

const PrivetRouter = ({ children }) => {
    const { user, loading } = useAuth()
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