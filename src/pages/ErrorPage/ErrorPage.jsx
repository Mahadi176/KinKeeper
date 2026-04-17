import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white text-green-900">
            <div className="text-center px-6">
                
    
                <h1 className="text-8xl font-extrabold tracking-widest text-green-900">
                    404
                </h1>


                <div className="w-24 h-1 bg-green-900 mx-auto my-6 rounded-full"></div>

                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                    Page Not Found
                </h2>

                <p className="text-gray-500 mb-8">
                    The page you're looking for doesn't exist .
                </p>

                <a
                    href="/"
                    className="inline-block px-6 py-3 border-2 border-green-590 text-green-900 font-medium rounded-full hover:bg-green-900 hover:text-white transition duration-300"
                >
                    Go Home
                </a>

            </div>
        </div>
    );
};

export default ErrorPage;