import React, { useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../context";

const token = "Token " + process.env.REACT_APP_API_KEY;
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const TresurePicker = () => {
  const { state } = useContext(Context);

  console.log(state.roomIdOnMouseOver);

  const tresureInTheRoom = state.items.length > 0 ? state.items[0] : "";

  const pickTresure = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/take/",
        { name: tresureInTheRoom },
        headers
      )
      .then(res => {
        //debugger;
        console.log(res.data);
        //dispatch({ type: "FETCH_PLAYER", payload: res.data });
      })
      .catch(err => {
        // debugger;
        console.log(err);
        //dispatch({ type: "ERROR_INIT", payload: err.response.data });
      });
  };

  const isTresureInRoom = state.items.length > 0 ? true : false;

  return (
    <Root>
      {isTresureInRoom ? (
        <button onClick={pickTresure}>Pick Tresure</button>
      ) : null}

      <p>{state.roomIdOnMouseOver}</p>
    </Root>
  );
};

export default TresurePicker;

const Root = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
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

  p {
    font-size: 20px;
  }
`;
