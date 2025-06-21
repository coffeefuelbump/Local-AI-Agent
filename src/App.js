// src/App.js
import React, { useState } from 'react';
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

  const handleSend = () => {
    const text = command.trim();
    if (!text) return;

    // pick a random funny message
    const rand = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    setBubble({ text: rand, show: true });
    setTimeout(() => setBubble(b => ({ ...b, show: false })), 2000);

    // shake animation
    setShaking(true);
    setTimeout(() => setShaking(false), 500);

    // send to Zapier (replace URL with your webhook)
    fetch('https://hooks.zapier.com/hooks/catch/14017241/uolkqxh/', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({ command: text })
    }).catch(console.error);

    setCommand('');
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
