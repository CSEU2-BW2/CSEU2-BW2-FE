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
  cooldownActive: false,
  errors: [],
  messages: [],
  items: [],
  name: "",
  strength: 10,
  speed: 10,
  gold: 0,
  inventory: [],
  hasMined: false,
  playerErrors: [],
  playerMessages: [],
  roomIdOnMouseOver: null
});

export default context;
