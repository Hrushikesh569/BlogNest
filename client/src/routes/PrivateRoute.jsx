import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const PrivateRoute = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <Loader />;
    }

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
