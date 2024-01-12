import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const ResetPassword = ({
  handleOnChange,
  email,
  handleOnResetSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleOnChange}
                value={email}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-3">
              Reset Password
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#!"
            onClick={() => formSwitcher("login")}
            className="text-info text-decoration-none"
          >
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};

export default ResetPassword;
