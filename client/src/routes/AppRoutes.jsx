import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CreateBlog from '../pages/CreateBlog';
import EditBlog from '../pages/EditBlog';
import BlogDetails from '../pages/BlogDetails';
import Profile from '../pages/Profile';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />

            {/* Private Routes */}
            <Route path="" element={<PrivateRoute />}>
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/blogs/edit/:id" element={<EditBlog />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
