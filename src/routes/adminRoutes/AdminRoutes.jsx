import React from 'react';
// import useAdmin from '../../hooks/UseAdmin'; // lowercase name here
// import useAuth from '../../hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
// import LoadingPage from '../Shared/LoadingPage'; // make sure you import LoadingPage if used
import useAdmin from '../../hooks/useAdmin/useAdmin/useAdmin';
import useAuth from '../../hooks/useAuth/useAuth';
import LoadingPage from '../../pages/shared/loadingPage/loadingPage';

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <LoadingPage />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
