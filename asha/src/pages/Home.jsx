import HeroSection from '../components/Home/HeroSection';
import JobListingSection from '../components/JobListing/JoListingSection'; // or JobListingSection if renamed
import TopStories from '../components/Home/Topstories';
import TopMentors from '../components/Home/TopMentors';
import React from 'react';

function Home() {
    return (
        <div className="space-y-10">
            <HeroSection />
            <JobListingSection />
            <TopStories />
            <TopMentors />
        </div>
    );
}

export default Home;
