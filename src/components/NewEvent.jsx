import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import {
  setTitle,
  setDate,
  setDescription,
  setEndTime,
  setEvent,
  setLocation,
  setMark,
  setStartTime,
  myDate,
} from '../redux/store';

const NewEvent = (props) => {
  const {
    setTitle,
    setDate,
    setDescription,
    setEndTime,
    setEvent,
    setLocation,
    setMark,
    setStartTime,
    myDate
  } = props;

  console.log(myDate);

  return (
    <Modal trigger={<Button color="green">Create new</Button>}>
      <Modal.Content>
        <input type="text" onChange={((event) => (setTitle(event.target.value)))} placeholder="title" />
        <input type="date" onChange={((event) => (setDate(event.target.value)))} />
        <input type="text" onChange={((event) => (setLocation(event.target.value)))} placeholder="location" />
        <textarea onChange={((event) => (setDescription(event.target.value)))} placeholder="description" />
        <Button color="violet" onClick={setEvent}>Submit</Button>
      </Modal.Content>
    </Modal>
  );
};

const mapDispatchToProps = {
  setTitle,
  setStartTime,
  setMark,
  setLocation,
  setEvent,
  setEndTime,
  setDescription,
  setDate,
};

const mapStateToProps = (state) => ({
  events: state.events,
  myDate: state.myDate,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);
