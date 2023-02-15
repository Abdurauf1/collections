import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const SignIn = () => {
  return (
    <Container>
      <Form className="w-50 my-5 mx-auto">
        <Form.Group className="mb-3" controlId="logInEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group className="my-3" controlId="logInPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control />
        </Form.Group>
        <Button className="w-100">Log In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
