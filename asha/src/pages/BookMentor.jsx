import React from 'react';

function BookMentor() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Book a Mentor</h1>
            <p className="text-gray-600 mb-8">Connect with experienced professionals who can guide you in your career journey.</p>

            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Find the Perfect Mentor</h2>
                <p className="mb-4">Use our advanced matching system to connect with mentors who have the expertise you need.</p>

                {/* Mentor search form would go here */}
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-500 italic">Mentor search functionality coming soon</p>
                </div>
            </div>
        </div>
    )
}

export default BookMentor;