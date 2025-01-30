import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
        <p style={{ fontSize: '18px', color: '#61dafb', maxWidth: '600px', textAlign: 'center' }}>
          React is a JavaScript library for building user interfaces. Start creating amazing UIs today!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#61dafb',
            padding: '10px 20px',
            borderRadius: '25px',
            fontSize: '16px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
