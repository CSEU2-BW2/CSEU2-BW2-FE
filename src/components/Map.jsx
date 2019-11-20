import React, { useContext, useState, useEffect } from "react";
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
  const { state, dispatch } = useContext(Context);
  const [room, setRoom] = useState(null);
  const values = Object.values(mapData);
  const keys = Object.keys(mapData);
  const coordinates = values.map(coordinate => coordinate[0]);
  const currentRoomCoords = state.room_id ? coordinates[state.room_id] : null;
  const currentRoom = [currentRoomCoords];
  const exits = values.map(exit => exit[1]);

  useEffect(() => {
    dispatch({ type: "MOUSE_OVER", payload: room });
  }, [room, dispatch]);

  const lineDisplay = values.map((value, index) => {
    const connections = getConnections(
      coordinates[index],
      exits[index],
      values
    );
    return (
      <LineSeries data={connections} color="blue" strokeWidth={1} key={index} />
    );
  });

  return (
    <MapWrapper>
      <FlexibleXYPlot width={800} height={600}>
        {lineDisplay}
        <MarkSeries
          data={coordinates}
          color="red"
          strokeWidth={1}
          size={4}
          onValueMouseOver={datapoint => {
            // display room number on mouseover
            keys.map(keyValue => {
              if (
                mapData[keyValue][0].x === datapoint.x &&
                mapData[keyValue][0].y === datapoint.y
              ) {
                setRoom(keyValue);
              }
              return keyValue;
            });
          }}
          onValueMouseOut={() => setRoom(null)}
        />
        {currentRoomCoords ? (
          <MarkSeries
            data={currentRoom}
            color="black"
            size={10}
            strokewidth={7}
            onValueMouseOver={datapoint => {
              // display room number on mouseover
              keys.map(keyValue => {
                if (
                  mapData[keyValue][0].x === datapoint.x &&
                  mapData[keyValue][0].y === datapoint.y
                ) {
                  setRoom(keyValue);
                }
                return keyValue;
              });
            }}
            onValueMouseOut={() => setRoom(null)}
          />
        ) : null}
      </FlexibleXYPlot>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  margin-top: 20px;
`;
