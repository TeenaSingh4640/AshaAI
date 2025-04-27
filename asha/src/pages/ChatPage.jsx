import React from 'react';
import Layout from '../components/Layout/Layout';
import ChatBot from '../components/Chatbot/Chatbot';

const ChatPage = () => {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">Chat Assistant</h1>
                <div className="max-w-2xl mx-auto">
                    <ChatBot />
                </div>
            </div>
        </Layout>
    );
};

export default ChatPage;