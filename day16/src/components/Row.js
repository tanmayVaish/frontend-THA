import {StyledRow} from "./styles/StyledRow";
import Cell from "./Cell";

const Row = (prop) => {


    return (

        <StyledRow className={prop.className}>
            <Cell/>
            <Cell className={'black'}/>
            <Cell/>
            <Cell className={'black'}/>
            <Cell/>
            <Cell className={'black'}/>
            <Cell/>
            <Cell className={'black'}/>
        </StyledRow>

    )
}

export default Row;