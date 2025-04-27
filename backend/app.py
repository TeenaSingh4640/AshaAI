from flask import Flask, request, jsonify
from flask_cors import CORS
import threading
import time
import os
import json

# Import your chatbot model/functions here
# For example:
# from chatbot import get_response

app = Flask(__name__)
CORS(app)  # This allows cross-origin requests

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    
    if not user_message:
        return jsonify({'error': 'No message provided'}), 400
    
    try:
        # Replace this with your actual chatbot logic
        # response = get_response(user_message)
        
        # For demonstration purposes
        # In actual implementation, this would call your trained model
        response = f"This is a sample response to: {user_message}"
        
        return jsonify({
            'response': response,
            'status': 'success'
        })
    except Exception as e:
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)