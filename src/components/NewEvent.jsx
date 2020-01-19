import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, Input, Form, TextArea, Label, Message,
} from 'semantic-ui-react';
import { setEvent } from '../redux/store';

const NewEvent = (props) => {
  // eslint-disable-next-line no-shadow,react/prop-types
  const { setEvent } = props;

  const [open, changeOpen] = useState(false);
  const [title, setTitle] = useState(null);
  const [titleFulfilled, setTitleFulfilled] = useState(false);
  const [date, setDate] = useState(null);
  const [dateFulfilled, setDateFulfilled] = useState(false);
  const [location, setLocation] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [mark, setMark] = useState(null);
  const [description, setDescription] = useState(null);
  const [timeError, setTimeError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleTimes = () => {
    // startTime.replace(':', '') + 0;
    if (startTime > endTime) {
      setTimeError(true);
    } else {
      setTimeError(false);
    }
  };

  const handleSubmit = () => {
    if (titleFulfilled && dateFulfilled) {
      setInputError(false);
      changeOpen(false);
      setEvent({
        title,
        date,
        location,
        startTime,
        endTime,
        mark,
        description,
      });
      setTitleFulfilled(false);
      setDateFulfilled(false);
    } else {
      setInputError(true);
    }
  };

  return (
    <Modal size="mini" open={open} trigger={<Button onClick={() => changeOpen(true)} color="green">Create new</Button>}>
      <Modal.Content className="create-event">
        <Label attached="top">Create new event</Label>
        {timeError
        && (
          <Message negative>
            <Message.Header>Input time error</Message.Header>
            <p>End time should be after start time</p>
          </Message>
        )}
        {inputError
        && (
          <Message negative>
            <Message.Header>Inputs fill error</Message.Header>
            <p>Fulfill as minimum Title and Date inputs</p>
          </Message>
        )}
        <Form>
          <Input
            type="text"
            placeholder="Title"
            onChange={(event) => {
              setTitle(event.target.value);
              setTitleFulfilled(true);
            }}
          />
          <Input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
              setDateFulfilled(true);
            }}
          />
          <Input
            type="text"
            placeholder="Location"
            onChange={(event) => (setLocation(event.target.value))}
          />
          <Input
            type="time"
            min="00:00"
            max="23:59"
            onChange={(event) => (setStartTime(event.target.value))}
          />
          <Input
            type="time"
            min="00:00"
            max="23:59"
            onChange={(event) => (setEndTime(event.target.value))}
          />

          <datalist
            id="importance"
            onChange={(event) => setMark(event.target.value)}
          >
            <option value="red">Most importance</option>
            <option value="orange">You are not sure about importance</option>
            <option value="blue">Your personal events</option>
            <option value="grey">Just as reminder</option>
          </datalist>

          <TextArea
            className="ui textarea"
            onChange={((event) => (setDescription(event.target.value)))}
            placeholder="Description"
          />
        </Form>

        <Button
          color="violet"
          onClick={() => {
            handleSubmit();
            handleTimes();
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
