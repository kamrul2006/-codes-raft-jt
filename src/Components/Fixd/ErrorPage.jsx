import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-7xl font-extrabold text-purple-600">404</h1>
                <h2 className="text-2xl mt-4 font-semibold text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 mt-2 mb-6">
                    Sorry, the page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full transition"
                >
                    <FaArrowLeft />
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
