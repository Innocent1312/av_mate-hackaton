const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_START_TIME = 'UPDATE_START_TIME';
const UPDATE_END_TIME = 'UPDATE_END_TIME';
const UPDATE_LOCATION = 'UPDATE_LOCATION';
const UPDATE_MARK = 'UPDATE_MARK';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_EVENT = 'UPDATE_EVENT';
const UPDATE_DATE = 'UPDATE_DATE';

export const updateTitle = (title) => ({ type: UPDATE_TITLE, title });
export const updateStartTime = (time) => ({ type: UPDATE_START_TIME, time });
export const updateEndTime = (time) => ({ type: UPDATE_END_TIME, time });
export const updateLocation = (location) => ({ type: UPDATE_LOCATION, location });
export const updateMark = (mark) => ({ type: UPDATE_MARK, mark });
export const updateDescription = (description) => ({ type: UPDATE_DESCRIPTION, description });
export const updateDate = (myDate) => ({ type: UPDATE_DATE, myDate });
export const updateEvent = () => ({ type: UPDATE_EVENT });

const eventsUpdaterReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return action.title;

    case UPDATE_START_TIME:
      return action.time;

    case UPDATE_END_TIME:
      return action.time;

    case UPDATE_LOCATION:
      return action.location;

    case UPDATE_MARK:
      return action.mark;

    case UPDATE_DESCRIPTION:
      return action.description;

    case UPDATE_DATE:
      return action.myDate;

    case UPDATE_EVENT:
      return [...state.events, {
        id: new Date().getTime(),
        title: state.title,
        startTime: state.startTime,
        endTime: state.endTime,
        location: state.location,
        myDate: state.myDate,
        mark: state.mark,
        description: state.description,
      }];

    default:
      return state;
  }
};

export default eventsUpdaterReducer;
