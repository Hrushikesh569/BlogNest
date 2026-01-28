import useAuth from '../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();

    return (
        <div className="max-w-md mx-auto py-10 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-3xl font-bold mb-4">
                    {user?.name?.charAt(0).toUpperCase()}
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{user?.name}</h1>
                <p className="text-gray-600 mb-6">{user?.email}</p>
                <div className="border-t pt-6">
                    <h2 className="text-lg font-semibold mb-2">Account Info</h2>
                    <p className="text-sm text-gray-500">Member since {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
