import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const Login = ({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Client Login </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleOnChange}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleOnChange}
                value={password}
                required
              />
            </Form.Group>
            <Button type="submit" className="mt-3">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#!"
            onClick={() => formSwitcher("reset")}
            className="text-info text-decoration-none"
          >
            Forgot Password
          </a>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};

export default Login;
