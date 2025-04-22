import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white">
            <div className="flex flex-col items-center">
                <FaSpinner className="text-5xl text-gray-800 animate-spin mb-4" />
                <p className="text-xl font-semibold text-gray-700">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
