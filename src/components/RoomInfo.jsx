import React, { useContext } from "react";
import Context from "../context";
import styled from "styled-components";

const RoomInfo = () => {
  const { state } = useContext(Context);
  console.log(state.items);

  return (
    <Root>
      <Head>
        <h2>{state.title}</h2>
        {/* <p> room id: {state.room_id}</p> */}
        {state.items.length === 0
          ? "No Tresures in this Room"
          : state.items.map(item => <p key={item}>Tresure: {item}</p>)}
      </Head>
      <Main>
        <p>Cooldown: {state.cooldown}</p>
        <p>
          {state.messages[0]} | {state.description}
        </p>
        <p>
          Avaible exits:
          {state.exits.length > 0
            ? state.exits.map(exit => <span key={exit}> {exit}</span>)
            : "No exits"}
        </p>
      </Main>
      {state.errors.length > 0 ? (
        <h5 style={{ color: "red" }}>{state.errors[0]}</h5>
      ) : (
        ""
      )}
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
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 5px;
  }
`;

const Main = styled.div`
  p:nth-of-type(1) {
    color: lightyellow;
  }

  p:nth-of-type(2) {
    font-size: 13px;
    font-style: italic;
    padding: 0 10px;
  }
`;
