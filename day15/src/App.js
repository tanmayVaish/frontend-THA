import legend from './images/legend.png'
import Hello from "./component/Hello";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={legend} className="App-logo" alt="logo" />
        <Hello></Hello>
      </header>
    </div>
  );
}

export default App;
