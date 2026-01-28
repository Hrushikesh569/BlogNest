import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors duration-200"
                        >
                            BlogNest
                        </Link>
                    </div>
                    <div className="flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        {user ? (
                            <>
                                <Link
                                    to="/create-blog"
                                    className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                                >
                                    Write
                                </Link>
                                <Link
                                    to="/profile"
                                    className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                                >
                                    Profile
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-secondary"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-primary"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
