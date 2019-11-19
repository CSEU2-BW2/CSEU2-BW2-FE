import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const NavBar = () => {
  const { state } = useContext(Context);
  return (
    <Root>
      <h2>Lambda Tresure Hunt</h2>
      <button>{state.room_id}</button>
    </Root>
  );
};

export default NavBar;

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  color: grey;
  box-shadow: 0 3px 2px #777;
  background: lightyellow;

  h2 {
    margin: 0;
    margin-left: 20px;
  }

  button {
    position: absolute;
    right: 2rem;
    background: none;
    border: 2px solid black;
    border-radius: 4px;
    padding: 0.4rem 2rem;
    font-size: 2rem;
    color: purple;
  }
`;
