import React from 'react';
import Event from './Event';

const dailyEvents = event.filter(e => e.date.slice(0, -3) + '' === `${y}-${m}`);

const Day = ({dailyEvents}) => {
  dailyEvents.map(ev =>
    (<Event
      key={ev.id}
      id={ev.id}
      title={ev.title}
      eventTimeRange={ev.eventTimeRange}
      description={ev.description}
    />)
  )
};

export default Day;
