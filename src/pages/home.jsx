import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import InterviewModal from "../components/interview-modal";
import InterviewList from "../components/interview-list";

const Home = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [participants, setParticipants] = useState([]);
  const [participantsWithId, setParticipantsWithId] = useState([]);

  useEffect(() => {
    const fetchInterviews = () => {
      axios.get("URL").then((res) => {
        setData(res.data);
      });
    };

    fetchInterviews();
  }, []);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = (id) => {
    axios
      .delete("URL" + id)
      .then(() => {
        console.log("Successfully deleted interview with id:", id);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChange = (type, value) => {
    switch (type) {
      case "startTime":
        setStartTime(value);
        break;
      case "endTime":
        setEndTime(value);
        break;
      case "participants":
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {};

  const handleEdit = (id) => {
    setIsNew(false);
    handleShow();
    console.log(id);
  };

  const handleAdd = () => {
    setIsNew(true);
    handleShow();
  };

  return (
    <>
      <InterviewList
        interviews={data}
        columns={[
          "INTERVIEW ID",
          "START TIME",
          "END TIME",
          "PARTICIPANTS",
          "ACTION",
        ]}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <Button variant="primary" onClick={handleAdd}>
        Add Interview
      </Button>
      <InterviewModal
        show={show}
        isNew={isNew}
        handleClose={handleClose}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        startTime={startTime}
        endTime={endTime}
        participantsWithId={participantsWithId}
        participants={participants}
      />
    </>
  );
};

export default Home;
