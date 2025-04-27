// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import JobListing from './pages/JobListing'
import Discover from './pages/Discover'
import History from './pages/History'
import SkillDevelopment from './pages/SkillDevelopment'
import Resume from './pages/Resume'
import InterviewPrep from './pages/InterviewPrep'
import BookMentor from './pages/Bookmentor';
import ChatPage from './pages/Chatpage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/book-mentor" element={<BookMentor />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/history" element={<History />} />
        <Route path="/skill-development" element={<SkillDevelopment />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/ChatPage" element={<ChatPage />} />
      </Routes>
    </Layout>
  )
}

export default App;