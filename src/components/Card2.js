import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card2 = ({ course }) => {
  const { courseName, courseDetails, bookImg } = course;
  return (
    <div className="my-2 ">
      <div className="book-card mb-3 p-3 ">
        <img src={bookImg} className="book-img mx-4 p-3" alt="" />
        <h4>{courseName}</h4>
        <p className="">{courseDetails.slice(0, 250) + "..."}</p>
        <Link to={`/course-details/${course.id}`}>
          <Button className="card-button">Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default Card2;