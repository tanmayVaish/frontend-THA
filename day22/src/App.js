import './App.scss';
import {useEffect, useState} from "react";
import Template from "./components/Template";
import {HashRouter, Route, Switch} from "react-router-dom";
import Meme from "./components/Meme";
import Home from "./components/Home";

function App() {

    const [templates, setTemplates] = useState([]);
    const [meme,setMeme] = useState(null);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then((data) => {
                setTemplates(data.data.memes);
                console.log(data.data.memes);
            });
    }, []);

    return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"}>
                            <Home/>
                        </Route>
                        <Route exact path={"/templates"}>
                            {(meme==null)?<Template templates={templates} setMeme={setMeme}/>:<Meme meme={meme} setMeme={setMeme}/>}
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
    );
}

export default App;
