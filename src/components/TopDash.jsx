import React, { useContext, useState } from "react";
import Context from "../context";
import styled from "styled-components";
import axios from "axios";
// import useDropdown from "./useDropdown";

const token = "Token " + process.env.REACT_APP_API_KEY;
const headers = {
  headers: { "Content-Type": "application/JSON", Authorization: token }
};

const TopDash = () => {
  const { state, dispatch } = useContext(Context);
  // const [value, Dropdown] = useDropdown("Sell", "", state.inventory);
  const [val, setVal] = useState("");
  // console.log(val);

  const sellItem = () => {
    axios
      .post(
        "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
        { name: val, confirm: "yes" },
        headers
      )
      .then(res => {
        //debugger;
        dispatch({ type: "SELL_SUCCESS", payload: res.data });
      })
      .catch(err => {
        //debugger;
        //dispatch({ type: "ERROR_INIT", payload: err.response.data });
      });
  };

  // const comfirmSell = () => {
  //   axios
  //     .post(
  //       "https://lambda-treasure-hunt.herokuapp.com/api/adv/sell/",
  //       { name: val, confirm: "yes" },
  //       headers
  //     )
  //     .then(res => {
  //       debugger;
  //       //dispatch({ type: "FETCH_PLAYER", payload: res.data });
  //     })
  //     .catch(err => {
  //       debugger;
  //       //dispatch({ type: "ERROR_INIT", payload: err.response.data });
  //     });
  // };

  return (
    <Root>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Current Room: </h2>
        <p>{state.room_id}</p>
      </div>
      <h4>{state.cooldown < 0 && <span>Ready to move</span>}</h4>
      {/* <Dropdown /> */}
      <label htmlFor={state.room_id}>
        sell Item
        <select
          id={state.room_id}
          value={val}
          onChange={e => setVal(e.target.value)}
          onBlur={e => setVal(e.target.value)}
          disabled={!state.inventory.length}
        >
          <option>Choose</option>
          {state.inventory &&
            state.inventory.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
        </select>
      </label>
      {val.length > 0 && <button onClick={sellItem}>Sell Item</button>}
    </Root>
  );
};

export default TopDash;

const Root = styled.div`
  width: 100%;
  height: 40px;
  color: grey;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h2 {
    margin: 0;
  }

  p {
    font-size: 30px;
    margin-left: 10px;
  }

  h4 {
    margin-left: 20px;
    color: purple;
  }
`;
