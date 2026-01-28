import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogService from '../services/blogService';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const CreateBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: '',
    });
    const [error, setError] = useState(null);

    const { user, isLoading } = useAuth();
    const navigate = useNavigate();

    // Redirect to login if user is not authenticated
    useEffect(() => {
        if (!isLoading && !user) {
            setError('You must be logged in to create a blog post');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    }, [user, isLoading, navigate]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        // Double-check user is still authenticated
        if (!user || !user.token) {
            setError('Authentication required. Please log in again.');
            setTimeout(() => navigate('/login'), 2000);
            return;
        }

        try {
            await blogService.createBlog(formData, user.token);
            navigate('/');
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to create blog');
        }
    };

    // Show loader while checking authentication
    if (isLoading) {
        return <Loader />;
    }

    // Don't render form if user is not authenticated
    if (!user) {
        return (
            <div className="max-w-3xl mx-auto py-8 px-4">
                <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
                    <h2 className="text-xl font-bold mb-2">Authentication Required</h2>
                    <p>You must be logged in to create a blog post. Redirecting to login...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Create New Blog</h1>
            {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input-field"
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Image URL (Optional)</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 mb-2 font-medium">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        className="input-field h-64"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Publish
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlog;
