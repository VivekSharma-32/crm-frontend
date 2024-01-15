import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-tickets.json";
import MessageHistory from "../../components/message-history/MessageHistory";
import UpdateTicket from "../../components/update-ticket/UpdateTicket";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../Layout/DefaultLayout";

// const ticket = tickets[0];
const Ticket = () => {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i].id == tId) {
        setTicket(tickets[i]);
        continue;
      }
    }
  }, [message, tId]);

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col>
            <BreadCrumb page="Ticket" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="fw-bolder text-secondary">
            <div className="subject">Subject: {ticket.subject}</div>
            <div className="date">Ticket Opened: {ticket.addedAt}</div>
            <div className="status">Status: {ticket.status}</div>
          </Col>
          <Col className="text-end">
            <Button variant="outline-info">Close Ticket</Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
        </Row>
        <hr />
        <Row className="mt-4">
          <Col>
            <UpdateTicket
              msg={message}
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Ticket;
