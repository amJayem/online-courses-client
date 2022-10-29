import React from "react";
import { useContext } from "react";
import logo from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiOutlineGithub, AiOutlineGoogle } from 'react-icons/ai'

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithub = () => {
    providerLogin(githubProvider)
      .then((res) => {
        console.log(res.user);
        navigate(from, {replace: true});
      })
      .catch((e) => {
        console.error("github login error => ", e);
        setError(e.message);
      });
  };

  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((res) => {
        // console.log(res.user);
        navigate(from, {replace: true});
      })
      .catch((e) => {
        console.error("register error => ", e);
        setError(e.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("btn clicked", email, password);

    signIn(email, password)
      .then((res) => {
        form.reset();
        setError("");
        navigate(from, {replace: true});
        // console.log('sign in: ',res.user);
      })
      .catch((e) => {
        setError(e.message);
        toast.warning('error');
        console.error("sign in error => ", e);
      });
  };

  return (
    <div className="mb-5 px-5 container">
      <div className="">
        <img className="logo w-2" src={logo} alt="" />
        <h1>Login Now!!</h1>
      </div>
      <Form className="mb-2" onSubmit={handleSubmit}>
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
          Login
        </Button>
      </Form>

      <ButtonGroup vertical>
        <Button variant="warning" onClick={handleGoogle} className="mb-1">
        <AiOutlineGoogle/>  Login with Google
        </Button>

        <Button variant="dark" onClick={handleGithub}>
        <AiOutlineGithub/>  Login with Github</Button>
      </ButtonGroup>
    </div>
  );
};

export default Login;
