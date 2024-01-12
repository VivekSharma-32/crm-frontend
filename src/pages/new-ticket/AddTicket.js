import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import AddTicketForm from "../../components/add-ticket-form/AddTicketForm";
import { shortText } from "../../utils/validation";

const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};

const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};

const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormData);

  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setFormDataError(initialFormError);

    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      ...initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Form data submission request received!", formData);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumb page={"New Ticket"} />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmData={formData}
            formDataError={formDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AddTicket;
