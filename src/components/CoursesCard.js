import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
  //   console.log(course);
  const { courseName, courseDetails, bookImg } = course;
  return (
    <div>
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img className="img-fluid" variant="top" src={bookImg} />
        <Card.Body>
          <Card.Title>{courseName}</Card.Title>
          <Card.Text>{courseDetails.slice(0, 250) + "..."}</Card.Text>
          <Link to={`/course-details/${course.id}`} className="text">
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoursesCard;
