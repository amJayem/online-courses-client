import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course);

  const { courseName, courseDetails, bookImg, suggestedBooks } = course;
  return (
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img className="" variant="top" src={bookImg} />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>{courseDetails}</Card.Text>
          <Card.Title>Suggested Book:</Card.Title>
          <Card.Text>{suggestedBooks}</Card.Text>
          <Button variant="success">
            <Link className="text" to="/">
              Go to Premium access
            </Link>
          </Button>
        </Card.Body>
      </Card>
  );
};

export default CourseDetails;
