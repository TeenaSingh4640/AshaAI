import React from 'react';

function History() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Your History</h1>
            <p className="text-gray-600 mb-8">Review your past activities and interactions on the platform.</p>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
                <p className="text-gray-500 italic">Your activity history will appear here once you start using the platform.</p>
            </div>
        </div>
    )
}

export default History;