import React, { useContext, useState } from "react";
import Context from "../context";
import styled from "styled-components";
// import useDropdown from "./useDropdown";



const TopDash = () => {
  const { state } = useContext(Context);
  // const [value, Dropdown] = useDropdown("Sell", "", state.inventory);
  const [val, setVal] = useState("Choose");
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
          value={state}
          onChange={e => setVal(e.target.value)}
          onBlur={e => setVal(e.target.value)}
          disabled={!state.inventory.length}
        >
          <option>{val}</option>
          {state.inventory &&
            state.inventory.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
        </select>
      </label>
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
