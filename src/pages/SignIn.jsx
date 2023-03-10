import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import signUpImg from "../assets/images/signup.jpg";
import SocialsSignIn from "../components/SocialsSignIn";

const SignIn = () => {
  return (
    <Container className="d-flex py-5 px-0">
      <div className="w-50">
        <h6 className="w-75 mb-5">
          <span className="text-secondary">Not a member yet?</span>{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign Up
          </Link>
        </h6>
        <div className="w-75">
          <h1 className="mb-4">Sign In</h1>
          <Form>
            <Form.Group className="mb-3" controlId="signInEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="signInPassword">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="password" name="password" required />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-between">
              <Button type="submit">Sign In</Button>
              <span className="text-secondary">or</span>
              <SocialsSignIn />
            </div>
          </Form>
        </div>
      </div>
      <img className="w-50" src={signUpImg} alt="sign up image" />
    </Container>
  );
};

export default SignIn;
