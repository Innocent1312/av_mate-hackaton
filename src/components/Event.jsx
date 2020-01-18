import React from 'react';
import { Card } from 'semantic-ui-react';


const Event = ({ id, title, start_time, location, description }) => (
  <Card
    id={id}
    header={title}
    meta={start_time}
    extra={location}
    description={description}
  />
);

export default Event;
