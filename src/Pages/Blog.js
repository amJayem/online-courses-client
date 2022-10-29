import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
    <Accordion className='mb-5' defaultActiveKey="0" alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header><b>What is cors?</b></Accordion.Header>
        <Accordion.Body>
        <b>Cross-Origin Resource Sharing</b> (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><b>Why are you using firebase? What other options do you have to implement authentication?</b> </Accordion.Header>
        <Accordion.Body>
        The <b>Firebase Realtime Database</b> lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><b>How does the private route work?</b></Accordion.Header>
        <Accordion.Body>
        The private route component is similar to the public route, the only change is that <b>redirect URL and authenticate condition</b>. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><b>What is Node? How does Node work?</b></Accordion.Header>
        <Accordion.Body>
        It is a <b>used as backend service where javascript works on the server-side of the application</b>. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;