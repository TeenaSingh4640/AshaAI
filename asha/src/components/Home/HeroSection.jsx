import { ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';

function HeroSection() {
    return (
        <section className="pb-6">
            <div className="mb-6">
                <h1 className="text-4xl font-bold text-center text-primary mb-10">What Can I Help With?</h1>

                <div className="bg-secondary rounded-lg p-6 flex justify-between items-center mb-6">
                    <p className="text-xl text-gray-600">No more guessing. Just answers</p>
                    <div className="bg-white rounded-full p-4 shadow-md">
                        <ArrowUp size={24} />
                    </div>
                </div>

                <div className="flex gap-4">
                    <Link to="/search" className="flex-1 bg-primary bg-opacity-20 rounded-full py-2 px-6 text-center">
                        Search With Asha AI
                    </Link>
                    <Link to="/jobs" className="flex-1 bg-primary bg-opacity-20 rounded-full py-2 px-6 text-center">
                        Research with jobs
                    </Link>
                    <Link to="/platforms" className="flex-1 bg-primary bg-opacity-20 rounded-full py-2 px-6 text-center">
                        Platforms
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
