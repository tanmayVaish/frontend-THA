import './App.css';
import Templates from "./components/Templates";
import {useEffect, useState} from "react";
import Meme from "./components/Meme";

function App() {
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes').then((meme) => meme.json()).then((data) => {
            setTemplates(data.data.memes);
        })
    }, [])

    return (
        <div className="App">
            {
                meme === null ? <Templates templates={templates} setMeme={setMeme}/> : <Meme templates={templates} setMeme={setMeme} meme={meme}/>
            }
        </div>
    );
}

export default App;
