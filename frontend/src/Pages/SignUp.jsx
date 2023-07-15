// let axios = require("axios");
import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-date-picker";

// import BootstrapDatePickerComponent from "./BootstrapDatePickerComponent";

import { useState } from "react";

// let data = await axios.get("/user");
// data = data.data;

export default function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password_confirmation, setPasswordConfirmation] = useState("");
  let [name, setName] = useState("");
  let [department, setDepartment] = useState("");
  let [bio, setBio] = useState("");
  let [graduating_year, setGraduatingYear] = useState(0);
  let [study_year, setStudyYear] = useState(0);
  let [degree_type, setDegreeType] = useState("");
  let [school, setSchool] = useState("");
  let [dob, setDOB] = useState(new Date());
  let [anon, setAnon] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // let axiosConfig = {
    //   headers: {
    //     "content-type": "application/x-www-form-urlencoded",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // };

    let res = await axios.post(
      "/user",
      {
        email: email,
        encrypted_password: password,
        password_confirmation: password_confirmation,
        name: name,
        department: department,
        bio: bio,
        graduating_year: graduating_year,
        study_year: study_year,
        degree_type: degree_type,
        school: school,
        date_of_birth: dob,
        anonymous_account: anon,
      }
      //   axiosConfig
    );

    alert(res);
  };

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Sign Up page</h4>
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

        <Form.Group>
          <Form.Label>Confirm your password:</Form.Label>
          <Form.Control
            type="password"
            value={password_confirmation}
            onChange={(event) => {
              setPasswordConfirmation(event.target.value);
            }}
            placeholder="Re-enter your password"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your department:</Form.Label>
          <Form.Control
            type="text"
            value={department}
            onChange={(event) => {
              setDepartment(event.target.value);
            }}
            placeholder="Enter your department"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your bio:</Form.Label>
          <Form.Control
            type="text"
            value={bio}
            onChange={(event) => {
              setBio(event.target.value);
            }}
            placeholder="Enter your bio"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your graduating year:</Form.Label>
          <Form.Control
            type="integer"
            value={graduating_year}
            onChange={(event) => {
              setGraduatingYear(event.target.value);
            }}
            placeholder="Enter your graduating year"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your Degree type:</Form.Label>
          <Form.Control
            type="integer"
            value={degree_type}
            onChange={(event) => {
              setDegreeType(event.target.value);
            }}
            placeholder="Enter your current degree type"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your study year:</Form.Label>
          <Form.Control
            type="integer"
            value={study_year}
            onChange={(event) => {
              setStudyYear(event.target.value);
            }}
            placeholder="Enter your current study year"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Enter your school:</Form.Label>
          <Form.Control
            type="string"
            value={school}
            onChange={(event) => {
              setSchool(event.target.value);
            }}
            placeholder="Enter your school"
          />
        </Form.Group>

        {/* <DatePicker value={dob} onChange={(date) => setDOB(date)} /> */}

        <Form.Group>
          <Form.Label>Enter your Date of Birth:</Form.Label>
          <Form.Control
            type="date"
            value={dob}
            onChange={(date) => setDOB(date)}
            // placeholder="Enter your Date of Birth:"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Anonymous account</Form.Label>
          <Form.Check.Input
            type="checkbox"
            checked={anon}
            onChange={() => setAnon(!anon)}
            // placeholder="Enter your Date of Birth:"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

//   ## own fields
//   t.string :name
//   t.string :department
//   t.string :bio
//   t.integer :graduating_year
//   t.integer :study_year
//   t.string :degree_type
//   t.string :school

//   t.integer :user_type

//   t.datetime :date_of_birth
