import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import DefaultLayout from "../../Layout/DefaultLayout";
import TicketTable from "../../components/ticket-table/TicketTable";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import tickets from "../../assets/data/dummy-tickets.json";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col>
            <BreadCrumb page={"Dashboard"} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5 mb-2">
            <Link to={"/add-ticket"}>
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
            </Link>
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
            <TicketTable tickets={tickets} />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default Dashboard;
