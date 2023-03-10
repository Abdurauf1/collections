import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { api } from "../api/api";
import { Link } from "react-router-dom";
import axios from "axios";
import backIcon from "../assets/icons/back.svg";
import signUpImg from "../assets/images/signup.jpg";
import SocialsSignIn from "../components/SocialsSignIn";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [state, setState] = useState(initialState);

  const { name, email, password } = state;

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${api}/signup`, {
        name,
        email,
        password,
      })
      .then(() => {
        setState({ name: "", email: "", password: "" });
      })
      .catch(error => {
        if (error) {
          console.log(error);
        }
      });
  };

  const inputChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <Container className="d-flex px-0 py-5">
      <div className="w-50">
        <div className="d-flex justify-content-between align-items-center mb-5 w-75">
          <Link
            to="/signin"
            className="d-flex align-items-center justify-content-center p-2 rounded-circle bg-light"
            style={{ width: "3rem", height: "3rem" }}
          >
            <img className="w-75" src={backIcon} alt="back" />
          </Link>
          <h6>
            <span className="text-secondary">Already a member?</span>{" "}
            <Link to="/signin" className="text-decoration-none">
              Sign In
            </Link>
          </h6>
        </div>
        <div className="w-75">
          <h1 className="mb-4">Create an Account</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="SignUpName">
              <Form.Label>
                Full Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" name="name" value={name} onChange={inputChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="SignUpEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={inputChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="SignUpPassword">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={inputChange}
                required
              />
            </Form.Group>
            <div className="d-flex align-items-center justify-content-between">
              <Button type="submit">Create Account</Button>
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

export default SignUp;
