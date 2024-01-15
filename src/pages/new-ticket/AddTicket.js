import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm";

const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page={"New Ticket"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
