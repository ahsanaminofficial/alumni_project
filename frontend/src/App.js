import { Routes, Route, Link } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { HomePage } from "./Pages/HomePage";
// import { AboutPage } from "./Pages/AboutPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import SignIn from "./Pages/SignIn";

import { Container, Navbar } from "react-bootstrap";
import { useState } from "react";

import SignUp from "./Pages/SignUp";

function App() {
  let [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/signin">
              Sign In
            </Link>

            <Link className="nav-link" to="/signup">
              Sign Up
            </Link>

            {/* <Link className="nav-link" to="/about">About Me</Link> */}
          </Container>
        </Navbar>
        <br />

        <Routes>
          {isSignedIn} ? (
          <>
            <Route path="/" element={<HomePage />} />
          </>
          ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/signin"
              element={<SignIn setIsSignedIn={setIsSignedIn} />}
            />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />)
          </>
        </Routes>
      </Container>
    </>
  );
}
export default App;
