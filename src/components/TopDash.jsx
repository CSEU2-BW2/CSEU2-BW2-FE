import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const TopDash = () => {
  const { state } = useContext(Context);
  return (
    <Root>
      <h2>Current Room: </h2>
      <p>{state.room_id}</p>
      <h4>{state.cooldown < 0 && <span>Ready to move</span>}</h4>
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
