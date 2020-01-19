import React from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'semantic-ui-react';
import { deleteEvent } from '../redux/store';


const Event = ({
  id, title, start_time, location, description, deleteEvent,
}) => (
  <Card
    id={id}
    header={title}
    meta={start_time}
    extra={(<a rel="noopener noreferrer" target="_blank" href={`https://www.google.com/maps/place/${location}`}>{location}</a>)}
    meta={<Button negative onClick={() => deleteEvent(id)}>Delete</Button>}
    description={description}
  />
);

export default connect(() => ({}), { deleteEvent })(Event);
