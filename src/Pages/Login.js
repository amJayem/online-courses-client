import React from "react";
import { useContext } from "react";
import logo from "../assets/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ButtonGroup } from "react-bootstrap";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGithub = () => {
    providerLogin(githubProvider)
      .then((res) => console.log(res.user))
      .catch((e) => console.error("github login error => ", e));
  };

  const handleGoogle = () => {
    providerLogin(googleProvider)
      .then((res) => {
        // console.log(res.user);
      })
      .catch((e) => console.error("register error => ", e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log("btn clicked", email, password);

    signIn(email, password)
      .then((res) => {
        // console.log('sign in: ',res.user);
      })
      .catch((e) => console.error("sign in error => ", e));
  };

  return (
    <div className="mb-5">
      <div className="logo">
        <img className="img-fluid w-2" src={logo} alt="" />
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
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <ButtonGroup vertical>
        <Button onClick={handleGoogle} className="mb-1">Login with Google</Button>
        
        <Button onClick={handleGithub}>Login with Github</Button>
      </ButtonGroup>
    </div>
  );
};

export default Login;

{
  /* <button
onClick={handleGoogle}
type="submit"
className="mb-2 w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-white hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg"
>
<span className="text-black mr-1">Log in with </span>
<span className="text-blue-500 font-semibold "> G</span>
<span className="text-red-500 font-semibold ">o</span>
<span className="text-yellow-500 font-semibold ">o</span>
<span className="text-blue-500 font-semibold ">g</span>
<span className="text-green-600 font-semibold ">l</span>
<span className="text-red-500 font-semibold ">e</span>
</button> */
}
