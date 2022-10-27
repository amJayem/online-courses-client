import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CoursesCard = ({ course }) => {
//   console.log(course);
  const { courseName, courseDetails, bookImg } = course;
  return (
    <Card className="mb-3" style={{ width: "18rem" }}>
      <Card.Img className="" variant="top" src={bookImg} />
      <Card.Body>
        <Card.Title>{courseName}</Card.Title>
        <Card.Text>
          {courseDetails.slice(0,250)+'...'}
        </Card.Text>
        <Button variant="warning">
            <Link 
            to={`/course-details/${course.id}`}
            className='text'>Details</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CoursesCard;
