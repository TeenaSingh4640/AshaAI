import React from 'react';

function SkillDevelopment() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Skill Development</h1>
            <p className="text-gray-600 mb-8">Enhance your professional skills with our curated learning resources.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Technical Skills</h2>
                    <p>Programming, data analysis, and other technical abilities.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Soft Skills</h2>
                    <p>Communication, leadership, and interpersonal skills.</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Industry Knowledge</h2>
                    <p>Domain-specific expertise for various sectors.</p>
                </div>
            </div>
        </div>
    )
}

export default SkillDevelopment;