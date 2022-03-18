import React, { useEffect, useState } from "react";
import Select from "react-select";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

const InterviewModal = ({
  show,
  handleClose,
  handleSubmit,
  handleChange,
  isNew,
  startTime,
  endTime,
  participants,
  participantsWithId,
}) => {
  const [newParticipants, setNewParticipants] = useState([]);
  const [selectedParticipants, setSelectedParticipants] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const temp = [];

    for (const obj of participantsWithId) {
      temp.push({ value: obj.id, label: obj.name });
    }
    setOptions(temp);

    const toDisplay = [];

    for (const id of participants) {
      const obj = participantsWithId.find((obj) => (obj.id = id));
      toDisplay.push({ value: obj.id, label: obj.name });
    }
    setSelectedParticipants(toDisplay);
  }, []);

  const handleParticipants = (optionsSelected) => {
    setNewParticipants(optionsSelected);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>{isNew ? "Add Interview" : "Edit Interview"}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup controlId="startTime">
              <FormLabel>Start Time</FormLabel>
              <FormControl
                type="time"
                value={startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="endTime">
              <FormLabel>End Time</FormLabel>
              <FormControl
                type="time"
                value={endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="participants">
              <FormLabel>Participants</FormLabel>
              <Select
                options={options}
                defaultValue={selectedParticipants}
                value={newParticipants}
                isMulti
                onChange={handleParticipants}
                closeMenuOnSelect={false}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isNew ? "Submit" : "Save Changes"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default InterviewModal;
