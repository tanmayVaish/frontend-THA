import Meme from "./components/Meme";
import Card from "./components/Card";

import './App.css';

function App() {

    const showMeme = () => {
        Card.style.display = 'none';
        Meme.style.display = 'flex';
    }



  return (
    <div className="App">

        <Card callback={showMeme}></Card>
        <Meme></Meme>
    </div>
  );
}

export default App;
