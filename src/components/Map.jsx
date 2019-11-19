import React, { useContext, useState } from "react";
import Context from "../context";
import mapData from "../map.json";
import styled from "styled-components";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";

const getConnections = (currentCoordinates, directionData, values) => {
  const connections = [];
  if (Number.isInteger(directionData.n)) {
    const { x, y } = values[directionData.n][0];
    connections.push(currentCoordinates);
    connections.push({ x, y });
  }
  if (Number.isInteger(directionData.s)) {
    const { x, y } = values[directionData.s][0];
    connections.push(currentCoordinates);
    connections.push({ x, y });
  }
  if (Number.isInteger(directionData.e)) {
    const { x, y } = values[directionData.e][0];
    connections.push(currentCoordinates);
    connections.push({ x, y });
  }
  if (Number.isInteger(directionData.w)) {
    const { x, y } = values[directionData.w][0];
    connections.push(currentCoordinates);
    connections.push({ x, y });
  }
  return connections;
};

const Map = () => {
  const { state } = useContext(Context);
  const [room, setRoom] = useState(null);
  const values = Object.values(mapData);
  const keys = Object.keys(mapData);
  const coordinates = values.map(coordinate => coordinate[0]);
  const currentRoomCoords = state.room_id ? coordinates[state.room_id] : null;
  const currentRoom = [currentRoomCoords];
  const exits = values.map(exit => exit[1]);
  console.log(state.room_id);

  const lineDisplay = values.map((value, index) => {
    const connections = getConnections(
      coordinates[index],
      exits[index],
      values
    );
    return <LineSeries data={connections} color="blue" strokeWidth={1} />;
  });

  return (
    <MapWrapper>
      <button>{state.room_id}</button>
      <FlexibleXYPlot width={800} height={600}>
        {lineDisplay}
        <MarkSeries data={coordinates} color="red" strokeWidth={1} size={4} />
        {currentRoomCoords ? (
          <MarkSeries
            data={currentRoom}
            color="black"
            size={10}
            strokewidth={7}
          />
        ) : null}
      </FlexibleXYPlot>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  h1 {
    text-align: center;
  }
  button {
    position: absolute;
    right: 2rem;
    background: none;
    border: 2px solid black;
    border-radius: 4px;
    padding: 1rem 2rem;
    font-size: 2rem;
    color: purple;
  }
`;
