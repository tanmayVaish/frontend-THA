import Row from "./Row";
import RowRev from "./RowRev";

const ChessBoard = () => {


    const chess = {
        "display": 'grid',
        "gridTemplateColumns": "repeat(8, auto)",
        "border": "3vh solid saddlebrown"
    }

    let col = [];
    for (let i=0; i < 8; i++) {
        if(i%2){
            col.push(<RowRev/>)
        }
        else {
            col.push(<Row/>)
        }
    }

    return (
        <div style={chess}>
            {col}
        </div>
    )
}

export default ChessBoard;