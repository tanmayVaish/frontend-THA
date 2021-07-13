import logo from './logo.svg';
import './App.css';
import Count from "./components/Count";

function App() {

    let arr = [];

    for(let i=0;i<5;i++){
        arr.push(<Count/>);
    }

  return (
    <div className="App">
        {arr}
    </div>
  );
}

export default App;
