import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./add-ticket-form.style.css";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  message: false,
};

const AddTicketForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormError);

    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Form data submission request received!", formData);
  };
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
              value={formData.subject}
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
              value={formData.issueDate}
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
              value={formData.detail}
              onChange={handleOnChange}
              placeholder="Issue Date"
              required
            />
          </Col>
        </Form.Group>
        <div className="d-grid mt-3">
          <Button type="submit" variant="info" className="text-white">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddTicketForm;
