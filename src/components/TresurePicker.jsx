import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../context";

const TresurePicker = () => {
  const { state } = useContext(Context);

  const isTresureInRoom = state.items.length > 0 ? true : false;

  return <Root>{isTresureInRoom ? <button>Pick Tresure</button> : null}</Root>;
};

export default TresurePicker;

const Root = styled.div`
  button {
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    font-size: 20px;
    transition: all 1s;
    &:hover {
      background: black;
      color: white;
      cursor: pointer;
    }
  }
`;
