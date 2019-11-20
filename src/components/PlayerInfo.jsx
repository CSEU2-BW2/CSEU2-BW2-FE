import React, { useEffect, useContext } from "react";
import Context from "../context";
import styled from "styled-components";
import axios from "axios";

const token = "Token " + process.env.REACT_APP_API_KEY;
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const PlayerInfo = () => {
  const { state, dispatch } = useContext(Context);
  //console.log(state);


  useEffect(() => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/status/",
        {},
        headers
      )
      .then(res => {
        dispatch({ type: "FETCH_PLAYER", payload: res.data });
      })
      .catch(err => {
        //debugger;
        //dispatch({ type: "ERROR_INIT", payload: err.response.data });
      });
  }, []);

  return (
    <Root>
      <p>Player name: {state.name}</p>
      <p>Strength: {state.strength}</p>
      <p>Speed: {state.speed}</p>
      <p>Gold: {state.gold}</p>
      <p>
        Inventory:{" "}
        {state.inventory.length > 0 &&
          state.inventory.map((inv, idx) => <span key={idx}>{inv} </span>)}
      </p>
      <p>Status {state.status}</p>
      <p>Player has mined: {state.hasMined.toString()}</p>
      <p>Player Error {state.playerErrors}</p>
    </Root>
  );
};

export default PlayerInfo;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  background: darkslategrey;
  color: white;
  p {
    margin: 5px;
  }
`;
