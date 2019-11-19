export default function reducer(state, { type, payload }) {
  switch (type) {
    case "FETCH_INIT":
      return {
        ...state,
        room_id: payload.room_id,
        title: payload.title,
        description: payload.description,
        exits: payload.exits,
        cooldown: payload.cooldown,
        errors: payload.errors,
        messages: payload.messages
      };
    case "FETCH_MOVE":
      return {
        ...state,
        room_id: payload.room_id,
        title: payload.title,
        description: payload.description,
        exits: payload.exits,
        cooldown: payload.cooldown,
        errors: payload.errors,
        messages: payload.messages,
        items: payload.items
      };
    case "FETCH_PLAYER":
      return {
        ...state,
        name: payload.name,
        strength: payload.strength,
        speed: payload.speed,
        gold: payload.gold,
        inventory: payload.inventory,
        status: payload.status,
        hasMined: payload.has_mined,
        playerErrors: payload.errors,
        playerMessages: payload.messages
      };
    case "ERROR_INIT":
      return {
        ...state,
        cooldown: payload.cooldown
      };
    case "MOVE_ERROR":
      return {
        ...state,
        errors: payload.errors
      };
    default:
      return state;
  }
}
