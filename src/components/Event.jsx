import React from 'react';
import { Card } from 'semantic-ui-react';


const Event = ({ id, title, start_time,  description }) => (
  <Card
    id={id}
    header={title}
    meta={start_time}
    description={description}
  />
);

export default Event;
