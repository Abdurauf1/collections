import React from "react";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Form>
      <Form.Group controlId="registerName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Register;
