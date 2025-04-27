import React from 'react';

function TopStories() {
    const stories = [
        {
            id: 1,
            title: "How I landed my dream job in tech",
            excerpt: "A journey from bootcamp to Silicon Valley",
            author: "Jane Doe",
            date: "Apr 15, 2025"
        },
        {
            id: 2,
            title: "5 skills you need to master in 2025",
            excerpt: "Stay ahead of the curve with these in-demand skills",
            author: "John Smith",
            date: "Apr 12, 2025"
        },
        {
            id: 3,
            title: "The future of AI in career development",
            excerpt: "How AI is transforming the job search process",
            author: "Alex Johnson",
            date: "Apr 10, 2025"
        }
    ]

    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Top Stories</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map(story => (
                    <div key={story.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                        <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                        <p className="text-gray-600 mb-3">{story.excerpt}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                            <span>{story.author}</span>
                            <span>{story.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopStories;