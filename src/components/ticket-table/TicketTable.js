import React from "react";
import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";

const TicketTable = ({ tickets }) => {
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

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default TicketTable;
