import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course);

  const { id, courseName, courseDetails, bookImg, suggestedBooks } = course;
  return (
    <div className='book-card mb-3 p-3 mx-auto my-0'>
      <h3>Course ID: 3141412{id}</h3>
    <img src={bookImg} className='book-img my-3' alt="" />
    <h4>{courseName}</h4>
    <p className='card-details'>{courseDetails}</p>
    <h4>Suggested Book:</h4>
    <p>{suggestedBooks}</p>
    <Link to={`/cart/${id}`} className="text ">
        <Button variant="success">Premium Access</Button>
    </Link> <br />
    <Button className="mt-2">Download Course Information</Button>
</div>
  );
};

export default CourseDetails;
