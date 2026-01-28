import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';

const BlogCard = ({ blog }) => {
    // Category color mapping
    const categoryColors = {
        Technology: 'badge-primary',
        Design: 'badge-secondary',
        Travel: 'badge-success',
        default: 'badge-gradient'
    };

    const badgeClass = categoryColors[blog.category] || categoryColors.default;

    return (
        <div className="card group animate-fade-in">
            {blog.image && (
                <div className="relative overflow-hidden h-56">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    {blog.category && (
                        <span className={`badge ${badgeClass} absolute top-4 left-4 z-10`}>
                            {blog.category}
                        </span>
                    )}
                </div>
            )}
            <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
                    {blog.title}
                </h2>

                <div className="flex items-center mb-4 space-x-3">
                    {blog.author?.avatar && (
                        <img
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            className="w-10 h-10 rounded-full border-2 border-purple-200"
                        />
                    )}
                    <div className="text-sm text-gray-600">
                        <p className="font-semibold text-gray-800">{blog.author?.name}</p>
                        <div className="flex items-center space-x-2">
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

                <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                    {blog.content}
                </p>

                <Link
                    to={`/blogs/${blog._id}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group/link"
                >
                    Read More
                    <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;

