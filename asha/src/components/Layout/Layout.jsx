import Navbar from './Navbar'
import Sidebar from './Sidebar'
import React from 'react';


function Layout({ children }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout;