import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ButtonGroup } from "react-bootstrap";

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { providerLogin, createUser } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithub = () => {
    providerLogin(githubProvider)
      .then((res) => {console.log(res.user); navigate('/');})
      .catch((e) => console.error("github login error => ", e));
  };

  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((res) => {
        // console.log(res.user);
        navigate('/');
      })
      .catch((e) => console.error("register error => ", e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    form.reset();
    console.log("btn clicked", email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setError('');
        navigate('/');
      })
      .catch((e) => {console.log("create user error => ", e)
      setError(e.message);
    });
  };

  return (
    <div className="mb-5">
      <div className="">
        <img className="logo w-2" src={logo} alt="" />
        <h1>Register Here!!</h1>
      </div>
      <Form className="mb-2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="url" placeholder="your profile image url" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <ButtonGroup vertical>
        <Button variant="warning" onClick={handleGoogle} className="mb-1">
          Register with Google
        </Button>

        <Button variant="dark" onClick={handleGithub}>Register with Github</Button>
      </ButtonGroup>
    </div>
  );
};

export default Register;
