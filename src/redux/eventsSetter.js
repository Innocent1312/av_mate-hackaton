const SET_TITLE = 'SET_TITLE';
const SET_START_TIME = 'SET_START_TIME';
const SET_END_TIME = 'SET_END_TIME';
const SET_LOCATION = 'SET_LOCATION';
const SET_MARK = 'SET_MARK';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_EVENT = 'SET_EVENT';
const SET_DATE = 'SET_DATE';

export const setTitle = (title) => ({ type: SET_TITLE, title });
export const setStartTime = (time) => ({ type: SET_START_TIME, time });
export const setEndTime = (time) => ({ type: SET_END_TIME, time });
export const setLocation = (location) => ({ type: SET_LOCATION, location });
export const setMark = (mark) => ({ type: SET_MARK, mark });
export const setDescription = (description) => ({ type: SET_DESCRIPTION, description });
export const setDate = (myDate) => ({ type: SET_DATE, myDate });
export const setEvent = () => ({ type: SET_EVENT });

const eventsSetterReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case SET_START_TIME:
      return {
        ...state,
        startTime: action.time,
      };

    case SET_END_TIME:
      return {
        ...state,
        endTime: action.time,
      };

    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };

    case SET_MARK:
      return {
        ...state,
        mark: action.mark,
      };

    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.description,
      };

    case SET_DATE:
      return {
        ...state,
        myDate: action.myDate,
      };

    case SET_EVENT:
      return {
        ...state,
        events: [...state.events, {
          id: new Date().getTime(), // Todo
          title: state.title,
          startTime: state.startTime,
          endTime: state.endTime,
          location: state.location,
          myDate: state.myDate,
          mark: state.mark,
          description: state.description,
        }],
      };

    default:
      return state;
  }
};

export default eventsSetterReducer;
