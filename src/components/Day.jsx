import React from 'react';
import { connect } from 'react-redux';

const Day = ({ dateOfDay} ) => (
  <div className="day">
    <p>{dateOfDay}</p>
  </div>
);

const mapStateToProps = (state) => ({

})

// const Day = ({ dateOfDay }) => {
//   dailyEvents.map((ev) =>
//     (<Event
//       key={ev.id}
//       id={ev.id}
//       title={ev.title}
//       eventTimeRange={ev.eventTimeRange}
//       description={ev.description}
//     />)
//   )
// };

export default connect(mapStateToProps)(Day);
