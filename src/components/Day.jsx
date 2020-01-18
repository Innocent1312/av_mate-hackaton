import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import Event from './Event';

const Day = ({ dateOfDay, events }) => {
  const filteredEvents = events.filter(item => {
    const reg = /-0/g;
    const newMyDate = item.myDate.replace(reg, '-');
    return newMyDate === dateOfDay;
  });

  return (
    <Modal trigger={<div className="day" />}>
      <Modal.Content>
        {filteredEvents.length > 0
          ? (
            <>
              {filteredEvents.map((item) => (
                <Event
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  location={item.location}
                  start_time={item.start_time}
                  title={item.title}
                />
              ))}
            </>
          )
          : (
            <h2>There is no event for this day</h2>
          )}
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, {})(Day);
