import {HashRouter,Redirect, Link, Route, Switch} from "react-router-dom";
import './App.css';
import {useState} from "react";

function App() {

    const [login, setLogin] = useState(false);

    return (
        <div>
            <HashRouter>
                <div className={'navbar'}>
                    <Link to={"/"}><div>Home</div></Link>
                    <Link to={"/about"}><div>About</div></Link>
                    <Link to={"/dash"}>DashBoard</Link>
                    <Link to={"/profile"}><div>Profile</div></Link>
                </div>
                <Switch>
                    <Route exact path={'/'}>
                        <div>
                            <h1>Home</h1>
                        </div>
                    </Route>
                    <Route exact path={'/dash'}>
                        {
                            (login === true) ? <h1>This page is Dashboard! This means you are logged in!</h1> : <Redirect to={"/"}/>
                        }
                    </Route>
                    <Route exact path={'/profile'}>
                        {
                            (login === true) ? <h1>This page is Profile! This means you are logged in!</h1> : <Redirect to={"/"}/>
                        }
                    </Route>
                    <Route exact path={'/about'}>
                        <h1>About</h1>
                    </Route>
                    <Route path={'/'}>
                        <h1>404</h1>
                    </Route>
                </Switch>
                <div>
                    {
                        (login === true) ? <div>You are logged in! You can access Profile and Dashboard</div> : <div>You are NOT logged in! You CANNOT access Profile and Dashboard</div>
                    }
                    <button onClick={() => {
                        if(login === false)
                            setLogin(true);
                        else
                            setLogin(false);
                    }}>
                        {
                            (login === true) ? "Logout" : "Login"
                        }
                    </button>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
