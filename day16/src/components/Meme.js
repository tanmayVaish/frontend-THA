import meme from "../images/me.jpg";
import {StyledMeme} from "./styles/StyledMeme";

const Meme = () => {

    return (
        <StyledMeme className={'meme'}>
            <img src={meme}/>
        </StyledMeme>
    );

}

export default Meme;