import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import SearchForm from "../../components/search-form/SearchForm";
import TicketTable from "../../components/ticket-table/TicketTable";
import tickets from "../../assets/data/dummy-tickets.json";
import DefaultLayout from "../../Layout/DefaultLayout";
import { Link } from "react-router-dom";

const TicketLists = () => {
  const [str, setStr] = useState("");
  const [displayTicket, setDisplayTicket] = useState(tickets);

  useEffect(() => {}, [str, displayTicket]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(e.target.value);
    searchTicket(value);
  };

  //search ticket
  const searchTicket = (strr) => {
    const displayTickets = tickets.filter((row) =>
      row.subject.toLowerCase().includes(strr.toLowerCase())
    );
    setDisplayTicket(displayTickets);
  };

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col>
            <BreadCrumb page={"Ticket Lists"} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Link to="/add-ticket">
              <Button variant="info">Add New Ticket</Button>
            </Link>
          </Col>
          <Col className="text-end">
            <SearchForm handleOnChange={handleOnChange} str={str} />
          </Col>
        </Row>
        <hr />

        <Row>
          <Col>
            <TicketTable tickets={displayTicket} />
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default TicketLists;
