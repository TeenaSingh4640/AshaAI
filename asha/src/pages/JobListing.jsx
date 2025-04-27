import JobListingSection from "../components/JobListing/JoListingSection"
import React from 'react';

function JobListingPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Find Your Next Career Opportunity</h1>
            <p className="text-gray-600 mb-8">Browse through our curated job listings tailored to your skills and preferences.</p>

            <JobListingSection />
        </div>
    )
}

export default JobListingPage;