import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, Modal, Input, Form, TextArea } from 'semantic-ui-react';
import {setEvent} from '../redux/store';

import { Button, Modal } from 'semantic-ui-react';
import { setEvent } from '../redux/store';


const NewEvent = (props) => {
  // eslint-disable-next-line no-shadow,react/prop-types
  const { setEvent } = props;

  const [open, changeOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [location, setLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [mark, setMark] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <Modal
      open={open}
      size="tiny"
      trigger={
        <Button onClick={() => changeOpen(true)} color="green">Create new</Button>
      }>

      <Modal.Content className="text-center">

        <Form>
        <Form.Field required>
          <Input required type="text" onChange={(event) => (setTitle(event.target.value))} placeholder="Title" />
        </Form.Field>
        <Input type="date" onChange={(event) => (setDate(event.target.value))} />
        <Input type="text" onChange={(event) => (setLocation(event.target.value))} placeholder="Location" />
        <Input type="time" onChange={(event) => (setStartTime(event.target.value))} />
        <Input type="time" onChange={(event) => (setEndTime(event.target.value))} />
        <Input
          list="importance"
          placeholder="Set importance status"
          onChange={(event) => setMark(event.target.value)}
        />
        <datalist id="importance">
          <option value="red">Most importance</option>
          <option value="orange">You are not sure about importance</option>
          <option value="blue">Your personal events</option>
          <option value="grey">Just as reminder</option>
        </datalist>
        <Form>
          <TextArea
            placeholder="description"
            onChange={((event) => (setDescription(event.target.value)))}
          />
        </Form>
        <Button
          color="violet"
          onClick={() => {
            setEvent({
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
        <Button onClick={() => changeOpen(false)} color="red">Close</Button></Form>
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
