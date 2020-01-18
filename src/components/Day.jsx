import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import Event from './Event';
import NewEvent from "./NewEvent";

const Day = ({ dateOfDay, events }) => {
  const filteredEvents = events.filter(item => item.date === dateOfDay);

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
                  start_time={item.start_time}
                  title={item.title}
                />
              ))}
              <NewEvent />
            </>
          )
          : (
            <NewEvent />
          )}
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  events: state.events,
});

export default connect(mapStateToProps, {})(Day);
