import React, { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm your assistant. How can I help you today?", isBot: true }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto scroll to bottom of messages
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, isBot: false };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('https://bae2-35-229-77-135.ngrok-free.app/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response from chatbot');
            }

            const data = await response.json();

            setMessages((prev) => [...prev, { text: data.response, isBot: true }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages((prev) => [...prev, {
                text: "Sorry, I couldn't process your request. Please try again later.",
                isBot: true
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    // ✅ Connection Test useEffect INSIDE the ChatBot component
    useEffect(() => {
        const testConnection = async () => {
            try {
                const response = await fetch('https://bae2-35-229-77-135.ngrok-free.app');
                const data = await response.json();
                console.log("Connection test successful:", data);
            } catch (error) {
                console.error("Connection test failed:", error);
            }
        };

        testConnection();
    }, []);

    return (
        <div className="flex flex-col h-96 max-w-md mx-auto bg-white rounded-lg shadow-md">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg max-w-xs ${message.isBot ? 'bg-gray-200 text-gray-800' : 'bg-blue-500 text-white'}`}
                        >
                            {message.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-4">
                        <div className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="border-t p-4 flex">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="flex-1 border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
                    disabled={isLoading || !input.trim()}
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatBot;
