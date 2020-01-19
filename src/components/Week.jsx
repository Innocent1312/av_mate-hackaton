import React from 'react';
import Event from './Event';

const arr = [];
for (let i = 1; i <= 7; i += 1) {
  arr[i - 1] = i;
}

const Week = () => (
  <>
    {arr.length > 0
      ? (
        <>
          <h2>That are events for now</h2>
          <div className="calendar calendar__week">
            {arr.map((item) => (
              <Event
                key={item.id}
                id={item.id}
                description={item.description}
                location={item.location}
                start_time={item.startTime}
                title={item.title}
              />
            ))}
          </div>
        </>
      )
      : (
        <h2>There is no event for this day</h2>
      )}
  </>
);

export default Week;
