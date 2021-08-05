import './styles/Home.scss'
import {Redirect} from "react-router-dom";
import {useState} from "react";
const Home = () =>{

    const [btnClicked, setBtnClicked] = useState(false);

    return(
        <div className={"homePage"}>
            <div className={"homePageTitle"}>
                <h1>Legend's Meme Generator</h1>
            </div>
            <div className={'homePageBtn'}>
                <div className={'playBtn'} onClick={()=>setBtnClicked(true)}>Play</div>
                {
                    btnClicked ? <Redirect to={"/templates"}/> : null
                }
            </div>
        </div>
    )
}
export default Home;