import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../context";

const token = "Token afc14f3d4808a91607f2e54e6072ab7de7d1c4e5";
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const TresurePicker = () => {
  const { state, dispatch } = useContext(Context);

  const tresureInTheRoom = state.items.length > 0 ? state.items[0] : "";

  const pickTresure = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
        { name: tresureInTheRoom },
        headers
      )
      .then(res => {
        debugger;
        //dispatch({ type: "FETCH_PLAYER", payload: res.data });
      })
      .catch(err => {
        debugger;
        //dispatch({ type: "ERROR_INIT", payload: err.response.data });
      });
  };

  const isTresureInRoom = state.items.length > 0 ? true : false;

  return (
    <Root>
      {isTresureInRoom ? (
        <button onClick={pickTresure}>Pick Tresure</button>
      ) : null}
    </Root>
  );
};

export default TresurePicker;

const Root = styled.div`
  height: 70px;
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
