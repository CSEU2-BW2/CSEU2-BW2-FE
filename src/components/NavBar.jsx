import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Root>
      <h2>Lambda Tresure Hunt</h2>
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
`;
