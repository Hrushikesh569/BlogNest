import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogService from '../services/blogService';
import useAuth from '../hooks/useAuth';
import Loader from '../components/Loader';
import formatDate from '../utils/formatDate';

const BlogDetails = () => {
    const [blog, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await blogService.getBlog(id);
                setBlog(data);
            } catch (err) {
                setError(err.message || 'Failed to fetch blog');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this blog?')) {
            try {
                await blogService.deleteBlog(id, user.token);
                navigate('/');
            } catch (err) {
                alert(err.response?.data?.message || 'Failed to delete blog');
            }
        }
    };

    if (isLoading) return <Loader />;

    if (error) {
        return (
            <div className="text-center py-20">
                <div className="inline-block p-8 bg-red-100 rounded-2xl mb-6">
                    <svg className="w-16 h-16 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
                <p className="text-red-500 mb-6">{error}</p>
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
            </div>
        );
    }

    const isAuthor = user && (user._id === blog.author?._id || user._id === blog.author);

    return (
        <article className="animate-fade-in">
            {/* Hero Image Section */}
            {blog.image && (
                <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-10 h-96 overflow-hidden">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
            )}

            <div className="max-w-4xl mx-auto px-4 pb-16">
                {/* Category Badge */}
                {blog.category && (
                    <span className="badge badge-gradient mb-4">
                        {blog.category}
                    </span>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {blog.title}
                </h1>

                {/* Author Info & Meta */}
                <div className="flex flex-wrap items-center justify-between gap-6 pb-8 mb-8 border-b-2 border-gray-100">
                    <div className="flex items-center space-x-4">
                        {blog.author?.avatar && (
                            <img
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                className="w-16 h-16 rounded-full border-4 border-purple-200 shadow-lg"
                            />
                        )}
                        <div>
                            <p className="font-bold text-lg text-gray-900">
                                {blog.author?.name || 'Anonymous'}
                            </p>
                            <div className="flex items-center text-gray-600 space-x-2">
                                <span>{formatDate(blog.createdAt)}</span>
                                {blog.readingTime && (
                                    <>
                                        <span>•</span>
                                        <span>{blog.readingTime} min read</span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons for Author */}
                    {isAuthor && (
                        <div className="flex space-x-3">
                            <Link
                                to={`/blogs/edit/${blog._id}`}
                                className="px-5 py-2 bg-gradient-warm text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                ✏️ Edit
                            </Link>
                            <button
                                onClick={handleDelete}
                                className="px-5 py-2 bg-gradient-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                🗑️ Delete
                            </button>
                        </div>
                    )}
                </div>

                {/* Blog Content */}
                <div className="prose prose-lg max-w-none">
                    <div className="text-gray-800 leading-relaxed whitespace-pre-line text-lg">
                        {blog.content}
                    </div>
                </div>

                {/* Tags */}
                {blog.tags && blog.tags.length > 0 && (
                    <div className="mt-12 pt-8 border-t-2 border-gray-100">
                        <h3 className="text-sm font-semibold text-gray-600 mb-3">TAGS</h3>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="badge badge-primary"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group"
                    >
                        <svg
                            className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to All Posts
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogDetails;

