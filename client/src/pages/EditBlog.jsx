import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogService from '../services/blogService';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';

const EditBlog = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await blogService.getBlog(id);

                // Authorization check
                if (data.author._id !== user._id && data.author !== user._id) {
                    setError("You are not authorized to edit this blog");
                    setIsLoading(false);
                    return;
                }

                setFormData({
                    title: data.title,
                    content: data.content,
                    image: data.image || '',
                });
            } catch (err) {
                setError(err.message || 'Failed to fetch blog');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [id, user]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await blogService.updateBlog(id, formData, user.token);
            navigate(`/blogs/${id}`);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to update blog');
        }
    };

    if (isLoading) return <Loader />;

    if (error) {
        return (
            <div className="text-center py-10">
                <p className="text-red-500 mb-4">{error}</p>
                <button onClick={() => navigate('/')} className="btn btn-primary">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Edit Blog</h1>
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
                        onClick={() => navigate(`/blogs/${id}`)}
                        className="btn btn-secondary"
                    >
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditBlog;
