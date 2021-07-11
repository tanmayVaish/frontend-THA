import styled from "styled-components";

export const StyledChessBoard = styled.div`
  
  display: none !important;
  border: saddlebrown 2vh solid;
  background-color: white;
  height: 50vh;
  width: 50vh;
  position: absolute;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: repeat(auto, 10);
  box-shadow: white 0px 5px 20px 5px;  
    `