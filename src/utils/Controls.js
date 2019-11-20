/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import styled from "styled-components";

const Controls = props => {
  return (
    <Root className="controller">
      <Button
        onClick={e => props.handleClick(e)}
        value="w"
        disabled={props.disabled}
      >
        ⬅️
      </Button>
      <Button
        onClick={e => props.handleClick(e)}
        value="n"
        disabled={props.disabled}
      >
        🔼
      </Button>
      <Button
        onClick={e => props.handleClick(e)}
        value="s"
        disabled={props.disabled}
      >
        🔽
      </Button>
      <Button
        onClick={e => props.handleClick(e)}
        value="e"
        disabled={props.disabled}
      >
        ➡️
      </Button>
    </Root>
  );
};
export default Controls;

const Button = styled.button`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 40px;
  outline: none;
  background-repeat: no-repeat;
  border: none;
`;

const Root = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  height: 70px;
`;
