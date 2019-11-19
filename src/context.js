import { createContext } from "react";
import mapData from "./map.json";

const context = createContext({
  mapGraph: mapData,
  room_id: null,
  title: "",
  description: "",
  coordinates: "(60, 60)",
  exits: [],
  cooldown: 0,
  errors: [],
  messages: [],
  items: []
});

export default context;
