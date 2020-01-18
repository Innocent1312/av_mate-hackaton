import React from 'react';
import Day from './Day';


const y = new Date().getFullYear();
const m = new Date().getMonth() + 1;

const dayOfMonth = 32 - new Date(y, m - 1, 32).getDate();

let arr = [];
for (let i = 1; i <= dayOfMonth; i++) {
  arr[i - 1] = i;
}

const Month = () => (
  <div className="calendar">
    <ul>
      {arr.map((d) => (
        <li>
          <Day dateOfDay={`${y}-${m}-${d}`} />
        </li>
      ))}
    </ul>

  </div>
);

export default Month;
