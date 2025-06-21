// src/App.js
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const MESSAGES = [
  "Beep boop! Initiating awesomeness…",
  "Charging neural pathways…",
  "One sec, debugging the gremlins…",
  "Hold tight—summoning the code spirits…",
  "Crunching pixels & dreams…",
  "Almost there—shh, don’t tell my mom about the overtime!",
  "Refilling coffee reserves…",
  "Running on RAM and pure willpower…",
  "Fan’s spinning like a DJ—just a sec…",
  "Voilà! Your wish is my command!"
];

function App() {
  const [command, setCommand] = useState('');
  const [shaking, setShaking] = useState(false);
  const [bubble, setBubble] = useState({ text: '', show: false });
  const [history, setHistory] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('commandHistory');
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  const handleSend = () => {
    const text = command.trim();
    if (!text) return;

    const rand = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setBubble({ text: rand, show: true });
    setTimeout(() => setBubble(b => ({ ...b, show: false })), 2000);

    setShaking(true);
    setTimeout(() => setShaking(false), 500);

    const entry = { command: text, timestamp: new Date().toISOString() };
    const newHistory = [entry, ...history];
    setHistory(newHistory);
    localStorage.setItem('commandHistory', JSON.stringify(newHistory));

    fetch('https://hooks.zapier.com/hooks/catch/14017241/uolkqxh/', {
      method: 'POST', mode: 'no-cors',
      body: JSON.stringify({ command: text })
    }).catch(console.error);

    setCommand('');
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedIndex(idx);
        setTimeout(() => setCopiedIndex(null), 1500);
      })
      .catch(console.error);
  };

  return (
    <div className="chat-ui">
      <div className={`agent-icon${shaking ? ' shake' : ''}`}>
        <i className="fas fa-robot"></i>
        {bubble.show && (
          <div className="speech-bubble">
            <i className="fas fa-check-circle check-icon"></i>
            {bubble.text}
          </div>
        )}
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

      <div className="history-container">
        <h2>Command History</h2>
        <ul className="history-list">
          {history.map((item, idx) => (
            <li key={idx} className="history-item">
              <span className="history-timestamp">
                {new Date(item.timestamp).toLocaleString()}
              </span>
              <span className="history-command">{item.command}</span>
              <button
                className={`copy-btn${copiedIndex === idx ? ' copied' : ''}`}
                onClick={() => handleCopy(item.command, idx)}
                title="Copy command"
              >
                <i className={`fas ${copiedIndex === idx ? 'fa-check' : 'fa-copy'}`}></i>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        Powered by{' '}
        <a href="https://bit.ly/44drMjS" target="_blank" rel="noopener noreferrer">
          Zapier
        </a>{' '}| Created by{' '}
        <a href="https://www.youtube.com/@Corbin_Brown" target="_blank" rel="noopener noreferrer">
          Corbin Brown
        </a>
      </footer>
    </div>
  );
}

export default App;
