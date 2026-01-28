import { useState, useEffect } from 'react';
import blogService from '../services/blogService';
import BlogCard from '../components/BlogCard';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import dummyBlogs from '../utils/dummyData';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDemoMode, setIsDemoMode] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await blogService.getBlogs();
                setBlogs(data);
                setIsDemoMode(false);
            } catch (err) {
                // Fallback to dummy data if API fails
                console.log('API unavailable, using dummy data');
                setBlogs(dummyBlogs);
                setIsDemoMode(true);
                setError(null); // Clear error since we have fallback data
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (isLoading) return <Loader />;

    // Featured posts (first 3)
    const featuredPosts = blogs.slice(0, 3);
    const regularPosts = blogs.slice(3);

    return (
        <div className="py-4">
            <Hero />

            {isDemoMode && (
                <div className="mb-8 p-4 bg-gradient-primary rounded-xl text-white text-center animate-slide-down">
                    <p className="font-semibold">
                        🎨 Demo Mode - Viewing sample content with stunning imagery
                    </p>
                </div>
            )}

            {/* Featured Posts Section */}
            {featuredPosts.length > 0 && (
                <section className="mb-16" id="blogs">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-4xl font-bold text-gradient mb-2">
                                Featured Stories
                            </h2>
                            <p className="text-gray-600">Handpicked articles worth your time</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((blog, index) => (
                            <div
                                key={blog._id}
                                className="animate-slide-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Regular Posts Section */}
            {regularPosts.length > 0 && (
                <section>
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Latest Articles
                        </h2>
                        <p className="text-gray-600">Explore more amazing content</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((blog, index) => (
                            <div
                                key={blog._id}
                                className="animate-fade-in"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {blogs.length === 0 && (
                <div className="text-center py-20">
                    <div className="inline-block p-8 bg-gradient-primary rounded-2xl mb-6">
                        <svg className="w-24 h-24 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">No blogs yet</h3>
                    <p className="text-gray-600 mb-6">Be the first to share your story!</p>
                    <a href="/create-blog" className="btn btn-primary">
                        Create First Blog
                    </a>
                </div>
            )}
        </div>
    );
};

export default Home;

