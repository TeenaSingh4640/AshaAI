import React from 'react';

function TopMentors() {
    const mentors = [
        {
            id: 1,
            name: "Dr. Sarah Chen",
            title: "Senior Data Scientist at Google",
            expertise: "AI & Machine Learning",
            rating: 4.9,
            sessions: 120
        },
        {
            id: 2,
            name: "Michael Rodriguez",
            title: "Engineering Manager at Apple",
            expertise: "Software Engineering & Leadership",
            rating: 4.8,
            sessions: 95
        },
        {
            id: 3,
            name: "Priya Sharma",
            title: "Product Lead at Microsoft",
            expertise: "Product Management & UX",
            rating: 5.0,
            sessions: 78
        }
    ]

    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Top Mentors</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mentors.map(mentor => (
                    <div key={mentor.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition duration-200">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                                {mentor.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 className="font-semibold">{mentor.name}</h3>
                                <p className="text-sm text-gray-600">{mentor.title}</p>
                            </div>
                        </div>
                        <p className="text-sm mb-3"><span className="font-medium">Expertise:</span> {mentor.expertise}</p>
                        <div className="flex justify-between text-sm">
                            <span className="text-amber-500">★ {mentor.rating}</span>
                            <span className="text-gray-500">{mentor.sessions} sessions</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopMentors;