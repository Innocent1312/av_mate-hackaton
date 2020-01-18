import React from 'react';
import Day from './Day';
import NewEvent from "./NewEvent";


const y = new Date().getFullYear();
const m = new Date().getMonth() + 1;
const w = new Date(y, m - 1, 1).getDay();

const dayOfMonth = 32 - new Date(y, m - 1, 32).getDate();

let arr = [];
for (let i = 1; i <= dayOfMonth; i++) {
  arr[i - 1] = i;
}

const Month = () => (
  <>
    <NewEvent />
    <div className={`calendar calendar-${dayOfMonth} calendar--w-${w}`}>
      {arr.map((d) => (
        <Day key={d} dateOfDay={`${y}-${m}-${d}`} />
      ))}
    </div>
  </>
);

export default Month;
