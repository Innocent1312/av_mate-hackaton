import { createStore } from 'redux';

const SET_EVENT = 'SET_EVENT';

export const setEvent = (eventObj) => ({ type: SET_EVENT, eventObj });


const rootReducer = (state, action) => {
  switch (action.type) {
    case SET_EVENT:
      return {
        ...state,
        events: [...state.events, action.eventObj],
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
