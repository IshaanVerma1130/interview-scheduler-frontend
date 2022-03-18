import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const InterviewList = ({ interviews, columns, handleDelete, handleEdit }) => {
  return (
    <>
      <div>
        <Table bordered variant="dark" hover striped>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {interviews.map((interview) => (
              <tr key={interview.id}>
                <td>{interview.id}</td>
                <td>{interview.id}</td>
                <td>{interview.id}</td>
                <td>{interview.id}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(interview.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit(interview.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default InterviewList;
