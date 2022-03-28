export const updateEvent = (state, event) => {
  state.map((item) => {
    if (item._id === event._id) {
      item.status = event.status;
    }
    return item;
  });
  return state;
};

const eventsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_EVENTS":
      return action.events;
    case "UPDATE_EVENTS":
      return [...state, action.event];
    default:
      return state;
  }
};

const recommendedEventsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_RECOMMENDED_EVENTS":
      return action.recommendedEvents;
    default:
      return state;
  }
};

const obj = { eventsReducer, recommendedEventsReducer };
export default obj;
