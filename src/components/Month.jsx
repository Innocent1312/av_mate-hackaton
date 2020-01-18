import React from 'react';
import Day from './Day';


const y = new Date().getFullYear();
const m = new Date().getMonth();
const w = new Date().getDay();

const dayOfMonth = 32 - new Date(y, m - 1, 32).getDate();

const event = [
  {
    id: 1,
    date: '2020-01-18',
    start_time: '10:00',
    end_time: '15:30',
    location: 'Ukraine, Kyiv',
    mark: 'important',
    description: 'Create calendar'
  },
  {
    id: 2,
    date: '2020-01-19',
    start_time: '11:00',
    end_time: '12:00',
    location: 'Ukraine, Kyiv',
    mark: 'medium',
    description: 'Create calendar'
  },
];
const arr = new Array(dayOfMonth);

const Month = () => (
  <div className="calendar">
    {arr.map(d =>
      <Day
        dateOfDay={`${y}-${m}-${d}`}
      />
    )}

  </div>
);

export default Month;
