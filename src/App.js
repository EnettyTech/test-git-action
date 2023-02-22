import logo from "./logo.svg";
import "./App.css";
const { REACT_APP_TEST, REACT_APP_TEST2, REACT_APP_TEST3 } = process.env;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ENV 1:{REACT_APP_TEST}</p>
        <p>ENV 2:{REACT_APP_TEST2}</p>
        <p>ENV 3:{REACT_APP_TEST3}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
