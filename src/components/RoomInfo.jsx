import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const RoomInfo = () => {
  const { state } = useContext(Context);

  return (
    <Root>
      <Head>
        <h2>{state.title}</h2>
        {/* <p> room id: {state.room_id}</p> */}
      </Head>
      <Main>
        <p>Cooldown: {state.cooldown}</p>
        <p>
          {state.messages[0]} | {state.description}
        </p>
        <p>
          Avaible exits:
          {state && state.exits.map(exit => <span key={exit}> {exit}</span>)}
        </p>
        <h5>{state.errors}</h5>
      </Main>
    </Root>
  );
};
export default RoomInfo;

const Root = styled.div`
  border: 1px solid black;
  background: darkslategrey;
  color: white;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const Main = styled.div``;
