import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                    Share Your Stories
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                    A modern platform for writers to share their thoughts, insights, and experiences with the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="#blogs"
                        className="btn btn-primary px-8 py-3 text-base"
                    >
                        Explore Articles
                    </Link>
                    <Link
                        to="/create-blog"
                        className="btn btn-secondary px-8 py-3 text-base"
                    >
                        Start Writing
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
