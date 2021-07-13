import Cell from "./Cell";
import CellB from "./CellB";

const Row = () => {

    let row = [];

    for (let i = 0; i < 8; i++) {
        if (i % 2) {
            row.push(<CellB/>)
        }
        else{
            row.push(<Cell/>)
        }
    }
    return row;
}

export default Row;