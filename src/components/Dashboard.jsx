/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Context from "../context";
import Controls from "../utils/Controls";
import RoomInfo from "./RoomInfo";
import Map from "./Map";
import TresurePicker from "./TresurePicker";
import PlayerInfo from "./PlayerInfo";

const token = "Token " + process.env.REACT_APP_API_KEY;
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const Dashboard = () => {
  const { state, dispatch } = useContext(Context);

  const handleControls = e => {
    const next_room_id =
      state.mapGraph[state.room_id][1][e.target.value.toString()] || 0;
    console.log(next_room_id);
    if (next_room_id || next_room_id === 0) {
      axios
        .post(
          "https://lambda-treasure-hunt.herokuapp.com/api/adv/move/",
          {
            direction: e.target.value.toString(),
            next_room_id: next_room_id.toString()
          },
          headers
        )
        .then(res => {
          //debugger;
          console.log(res.data);
          dispatch({ type: "FETCH_MOVE", payload: res.data });
        })
        .catch(err => {
          dispatch({
            type: "MOVE_ERROR",
            payload: err.response.data.errors[0]
          });
        });
    }
    countDownCooldown();
  };

  useEffect(() => {
    if (state.cooldown > 0) {
      countDownCooldown();
    }
  }, [state.cooldown]);

  const countDownCooldown = async () => {
    if (!state.cooldownActive) {
      const cooldownInterval = setInterval(() => {
        if (state.cooldown > 0) {
          dispatch({ type: "DECREASE_COOLDOWN", payload: true });
        } else {
          clearInterval(cooldownInterval);
          dispatch({ type: "SET_COOLDOWN" });
        }
      }, 1000);
    }
  };
  const disabled = state.cooldown < 0 ? false : true;

  return (
    <Root>
      <SidePannel>
        <Controls handleClick={handleControls} disabled={disabled} />
        <RoomInfo />
        <TresurePicker />
        <PlayerInfo />
      </SidePannel>
      <Map />
    </Root>
  );
};

export default Dashboard;

const Root = styled.div`
  display: flex;
  padding-top: 20px;
`;
const SidePannel = styled.div`
  height: 100%;
  min-width: 350px;
  max-width: 350px;
`;
