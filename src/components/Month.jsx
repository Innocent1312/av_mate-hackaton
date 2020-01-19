import React from 'react';
import Day from './Day';


const Month = ({y, m, w, dayOfMonth}) => {
  const arr = [];
  for (let i = 1; i <= dayOfMonth; i += 1) {
    arr[i - 1] = i;
  }

  return (
    <>
      <div className={`calendar calendar__month-${dayOfMonth} calendar__month-weekStart-${w}`}>
        {arr.map((d) => (
          <Day key={d} dateOfDay={`${y}-${m}-${d}`} />
        ))}
      </div>
    </>
  );
};

export default Month;
