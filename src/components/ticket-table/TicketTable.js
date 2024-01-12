import React from "react";
import Table from "react-bootstrap/Table";
import tickets from "../../assets/data/dummy-tickets.json";

const TicketTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Status</th>
          <th>Opened Dates</th>
        </tr>
      </thead>
      <tbody>
        {tickets.length ? (
          tickets.map((ticket, i) => (
            <tr key={i}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.addedAt}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} className="text-center p-3">
              No tickets to show
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TicketTable;
