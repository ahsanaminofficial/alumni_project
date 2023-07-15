import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";
// import { Redirect } from "react-router";
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let res = await axios.post("/user/signin", {
        email: email,
        encrypted_password: password,
      });

      //   alert(JSON.stringify(res));
      console.log(JSON.stringify(res)["data"]);
      console.log(res.data);
      if (res.data["message"] === "Successfully logged in!") {
        props.setIsSignedIn(true);
        navigate("/");
      } else {
        props.setIsSignedIn(false);
        navigate("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Sign In page</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Enter your your email address"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}
