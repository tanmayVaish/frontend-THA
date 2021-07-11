import Row from "./Row";
import {StyledChessBoard} from "./styles/StyledChessBoard";

const ChessBoard = () => {

    return (
        <StyledChessBoard>

            <Row/>
            <Row className={'reverse'}/>
            <Row/>
            <Row className={'reverse'}/>
            <Row/>
            <Row className={'reverse'}/>
            <Row/>
            <Row className={'reverse'}/>



        </StyledChessBoard>
    )

}


export default ChessBoard;