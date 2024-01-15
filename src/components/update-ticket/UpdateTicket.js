import React from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <div>
        <Form.Text>
          Please reply your message here or update the ticket
        </Form.Text>
      </div>
      <Form.Control
        as="textarea"
        value={msg}
        onChange={handleOnChange}
        rows="5"
        name="detail"
      />
      <div className="text-end mt-3 mb-3">
        <Button type="submit" variant="info">
          Reply
        </Button>
      </div>
    </Form>
  );
};

UpdateTicket.propTypes = {
  msg: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};

export default UpdateTicket;
