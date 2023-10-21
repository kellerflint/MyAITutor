import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './App.css'

function App() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const askQuestion = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post('http://127.0.0.1:5000/query', { query });
      setResponse(res.data.answer);
    } catch (error) {
      console.error('Error asking question:', error);
      setResponse('Sorry, an error occurred while trying to ask the question.');
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>Student AI Interface</h1>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask a question..."
      />
      <button onClick={askQuestion} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Ask'}
      </button>
      {response &&
        <div className="response">
          <strong>AI Response:</strong>
          <ReactMarkdown children={response} />
        </div>
      }
    </div>
  );
}

export default App;
