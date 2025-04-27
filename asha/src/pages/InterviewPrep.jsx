import React from 'react';

function InterviewPrep() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Interview Preparation</h1>
            <p className="text-gray-600 mb-8">Practice and prepare for your upcoming interviews with our interactive tools.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Mock Interviews</h2>
                    <p>Practice with AI-powered mock interviews tailored to your target role.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
                    <p>Prepare for frequently asked questions in your industry.</p>
                </div>
            </div>
        </div>
    )
}

export default InterviewPrep;