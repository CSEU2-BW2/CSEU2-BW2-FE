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
          messages: payload.messages,
        };
      default:
        return state;
    }
  }
  