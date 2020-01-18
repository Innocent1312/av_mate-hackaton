import React from 'react';
import { Card } from 'semantic-ui-react';


const Event = ({ id, title, eventTimeRange, description }) => (
  <Card
    id={id}
    header={title}
    meta={eventTimeRange}
    description={description}
    onClick={console.log(id, title)}
  />
);

export default Event;
