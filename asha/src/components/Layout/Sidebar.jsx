import { Link, useLocation } from 'react-router-dom'
import { Home, Search, User, Briefcase, Clock, BookOpen, FileText, MessageSquare } from 'lucide-react'
import React from 'react';

function Sidebar() {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path ? 'active' : ''
    }

    return (
        <aside className="w-48 bg-white border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <Link to="/" className="font-bold text-xl">Asha AI</Link>
            </div>

            <nav className="p-3">
                <ul className="space-y-1">
                    <li>
                        <Link to="/" className={`sidebar-link ${isActive('/')}`}>
                            <Home size={20} />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/discover" className={`sidebar-link ${isActive('/discover')}`}>
                            <Search size={20} />
                            <span>Discover</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/book-mentor" className={`sidebar-link ${isActive('/book-mentor')}`}>
                            <User size={20} />
                            <span className="text-primary">Book Mentor</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/jobs" className={`sidebar-link ${isActive('/jobs')}`}>
                            <Briefcase size={20} />
                            <span>Job Listing</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/history" className={`sidebar-link ${isActive('/history')}`}>
                            <Clock size={20} />
                            <span>History</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/skill-development" className={`sidebar-link ${isActive('/skill-development')}`}>
                            <BookOpen size={20} />
                            <span>Skill Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume" className={`sidebar-link ${isActive('/resume')}`}>
                            <FileText size={20} />
                            <span>Resume</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/interview-prep" className={`sidebar-link ${isActive('/interview-prep')}`}>
                            <MessageSquare size={20} />
                            <span>Interview Prepration</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;