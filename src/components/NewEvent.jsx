import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import {setEvent} from '../redux/store';

const NewEvent = (props) => {
  const { setEvent } = props;

  const [open, changeOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [mark, setMark] = useState(null);
  const [description, setDescription] = useState(null);
  const getUniqueId = (id) => id + 1;


  return (
    <Modal open={open} trigger={<Button onClick={() => changeOpen(true)} color="green">Create new</Button>}>
      <Modal.Content>
        <input type="text" onChange={(event) => (setTitle(event.target.value))} placeholder="title" />
        <input type="date" onChange={(event) => (setDate(event.target.value))} />
        <input type="text" onChange={(event) => (setLocation(event.target.value))} placeholder="location" />
        <input type="time" onChange={(event) => (setStartTime(event.target.value))} />
        <input type="time" onChange={(event) => (setEndTime(event.target.value))} />
        <select onChange={(event) => setMark(event.target.value)}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
          <option value="grey">Grey</option>
        </select>
        <textarea onChange={((event) => (setDescription(event.target.value)))} placeholder="description" />
        <Button
          color="violet"
          onClick={() => {
            setEvent({
              id: getUniqueId(0),
              title,
              date,
              location,
              startTime,
              endTime,
              mark,
              description,
            }); changeOpen(false);
          }}
        >
          Submit
        </Button>
        <Button onClick={() => changeOpen(false)} color="red">Close</Button>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = {
  setEvent,
};

const mapStateToProps = (state) => ({
  events: state.events,
  mark: state.mark,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
