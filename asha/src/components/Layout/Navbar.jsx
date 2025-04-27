import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, MessageSquare } from 'lucide-react'
import React from 'react';

function Navbar() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold mr-10">
                        <Link to="/">Workflows</Link>
                    </h1>

                    {/* You could add navigation links here if needed */}
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/chat" className="flex items-center text-gray-600 hover:text-primary">
                            <MessageSquare size={18} className="mr-1" />
                            <span>Chat Assistant</span>
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    </div>

                    <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition duration-200">
                        Log in
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar;