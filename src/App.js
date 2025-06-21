// src/App.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  const [command, setCommand] = useState('');
  const [shaking, setShaking] = useState(false);

  const handleSend = () => {
    const text = command.trim();
    console.log('💡 handleSend called, raw command:', command);
    console.log('🔍 trimmed text:', text);
  
    if (!text) {
      console.log('⚠️ No text to send, aborting.');
      return;
    }
  
    console.log('🚀 Sending command to Zapier (no-cors)…');
    setShaking(true);
    setTimeout(() => {
      setShaking(false);
      console.log('🤖 Shake animation complete.');
    }, 500);
    
    // 🔧 Replace the URL below with your own webhook endpoint
    fetch('https://hooks.zapier.com/hooks/catch/14017241/uolkqxh/', {
      method: 'POST',
      mode: 'no-cors',      // disable CORS preflight
      body: JSON.stringify({ command: text })
    })
      .then(() => {

      })
      .catch(error => {
        console.error('❌ Unexpected error sending to Zapier:', error);
      });
  
    setCommand('');
    console.log('🧹 Cleared input field.');
  };
  
  

  return (
    <div className="chat-ui">
      <div className={`agent-icon${shaking ? ' shake' : ''}`}>
        <i className="fas fa-robot"></i>
      </div>

      <div className="input-bar">
        <textarea
          className="chat-input"
          placeholder="Type your command..."
          value={command}
          onChange={e => setCommand(e.target.value)}
          rows={1}
          onKeyDown={e =>
            e.key === 'Enter' && !e.shiftKey &&
            (e.preventDefault(), handleSend())
          }
        />
        <button className="send-btn" onClick={handleSend}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>

      <footer className="footer">
        Powered by{' '}
        <a
          href="https://bit.ly/44drMjS"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapier
        </a>
        {' '}| Created by{' '}
        <a
          href="https://www.youtube.com/@Corbin_Brown"
          target="_blank"
          rel="noopener noreferrer"
        >
          Corbin Brown
        </a>
      </footer>
    </div>
  );
}

export default App;
