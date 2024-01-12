import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-ticket-form.style.css";

const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  frmData,
  formDataError,
}) => {
  console.log(frmData);
  return (
    <div className="card mt-3 add-new-ticket p-5 bg-white">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              name="subject"
              value={frmData.subject}
              onChange={handleOnChange}
              placeholder="Subject"
              required
            />
            <Form.Text className="text-danger">
              {formDataError.subject && "Subject is required"}
            </Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmData.issueDate}
              onChange={handleOnChange}
              placeholder="Issue Date"
              required
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Details
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              as={"textarea"}
              name="detail"
              rows={5}
              value={frmData.detail}
              onChange={handleOnChange}
              placeholder="Issue Date"
              required
            />
          </Col>
        </Form.Group>
        <div className="d-grid mt-3">
          <Button variant="info" className="text-white">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  frmData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
export default AddTicketForm;
