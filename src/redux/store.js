import { createStore } from 'redux';

const SET_EVENT = 'SET_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

export const setEvent = (eventObj) => ({ type: SET_EVENT, eventObj });
export const deleteEvent = (id) => ({ type: DELETE_EVENT, id });

const uniqueIdGenerator = () => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
};

const getUniqueEventId = uniqueIdGenerator();

const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.eventObj, id: getUniqueEventId() }],
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

const initialState = {
  events: [],
};

const store = createStore(rootReducer, initialState);
export default store;
