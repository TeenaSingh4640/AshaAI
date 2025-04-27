import React from 'react';

function JobCard({ job }) {
    if (!job) return null; // or show a fallback/loading

    return (
        <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg overflow-hidden">
            <div className="bg-white rounded-b-lg mt-6 p-4">
                <div className="flex justify-between items-start mb-3">
                    <div>
                        <h3 className="font-bold">{job.company}</h3>
                        <h4 className="text-lg font-semibold">{job.title}</h4>
                    </div>
                    {job.type && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                            {job.type}
                        </span>
                    )}
                </div>

                <div className="text-sm text-gray-600">
                    <p>{job.location}</p>
                    {job.applicationDeadline && (
                        <p>Application Due: Apr {job.applicationDeadline}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobCard;
