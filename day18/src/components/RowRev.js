import Cell from "./Cell";
import CellB from "./CellB";

const Row = () => {

    let row = [];

    for (let i = 0; i < 8; i++) {
        if (i % 2) {
            row.push(<Cell/>)
        }
        else{
            row.push(<CellB/>)
        }
    }
    return row;
}

export default Row;