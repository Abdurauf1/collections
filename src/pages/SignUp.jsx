import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { api } from "../api/api";
import axios from "axios";
import signUpImg from "../assets/images/signup.jpg";
import Icon from "../components/Icon";
import GoogleIcon from "../assets/icons/google.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";

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
    <Container className="d-flex align-items-center" style={{ height: "100vh" }}>
      <img className="w-50 h-100" src={signUpImg} alt="sign up img" />
      <div className="d-flex flex-column justify-content-between w-100 px-5 h-75">
        <Form className="w-100" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="SignUpName">
            <Form.Label>
              Full Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="text" name="name" value={name} onChange={inputChange} required />
          </Form.Group>
          <Form.Group className="my-3" controlId="SignUpEmail">
            <Form.Label>
              Email <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control type="email" name="email" value={email} onChange={inputChange} required />
          </Form.Group>
          <Form.Group className="my-3" controlId="SignUpPassword">
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
          <Button className="mt-4 w-100" type="submit">
            Create Account
          </Button>
        </Form>
        <span className="text-center my-4">or</span>
        <div className="mx-auto w-25 d-flex justify-content-between">
          <Icon icon={GoogleIcon} alt="google" />
          <Icon icon={LinkedInIcon} alt="linkedin" />
          <Icon icon={GitHubIcon} alt="github" />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
