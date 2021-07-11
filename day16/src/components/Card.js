import {StyledCard} from "./styles/StyledCard";
import Meme from "./Meme";

const showCard = ({callback}) => {
    return(
        <StyledCard>
            <h1>In Day 15, You had seen only my STRENGTHS, It is about time to meet this legend's weakness.</h1>
            <h3>Forget about the ChessBoard, I have not created it!!</h3>
            <button onClick={callback}>Click This, If you are Sure!!!</button>
        </StyledCard>
);
};

export default showCard;