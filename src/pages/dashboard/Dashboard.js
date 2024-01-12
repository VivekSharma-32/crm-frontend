import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page={"Dashboard"} />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{
              fontSize: "2rem",
              padding: "10px 30px",
              color: "white",
            }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 5</div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-2">Recently added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
