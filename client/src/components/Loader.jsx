const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-purple-200 rounded-full"></div>
                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
            </div>
            <p className="mt-6 text-gray-600 font-medium animate-pulse">Loading amazing content...</p>
        </div>
    );
};

export default Loader;

