import logo from './logo.svg';
import './App.css';
import Fconponents from './Fconponents';
import Class from './Class'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Class></Class>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          web developer
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WEB developer
        </a>
      </header>
    </div>
  );
}

export default App;
