import JobCard from './JobCard'
import React from 'react';

function JobListingSection() {
    const jobs = [
        {
            id: 1,
            company: "Hilton",
            logo: "/hilton-logo.png",
            title: "Assistant Manager-Purchase",
            location: "Singapore",
            type: "In Office",
            applicationDeadline: "Apr 17, 2025"
        },
        {
            id: 2,
            company: "Microsoft",
            logo: "/microsoft-logo.png",
            title: "Software Engineer",
            location: "Seattle, WA",
            type: "Hybrid",
            applicationDeadline: "Apr 20, 2025"
        },
        {
            id: 3,
            company: "Tesla",
            logo: "/tesla-logo.png",
            title: "AI Research Scientist",
            location: "Austin, TX",
            type: "Remote",
            applicationDeadline: "Apr 25, 2025"
        }
    ]

    return (
        <section>
            <h2 className="text-3xl font-bold mb-6">Job Listings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </section>
    )
}

export default JobListingSection