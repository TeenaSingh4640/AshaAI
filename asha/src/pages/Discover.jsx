import React from 'react';

function Discover() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Discover</h1>
            <p className="text-gray-600 mb-8">Explore new opportunities, learning resources, and connections.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Trending Jobs</h2>
                    <p>Discover the most in-demand positions across various industries.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Learning Paths</h2>
                    <p>Curated learning experiences to help you acquire new skills.</p>
                </div>
            </div>
        </div>
    )
}

export default Discover;