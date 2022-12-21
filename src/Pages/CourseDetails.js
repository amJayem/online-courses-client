import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useLoaderData } from "react-router-dom";
import { AiFillFilePdf } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course);

  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: "Course information",
    onAfterPrint: () => toast("Download success"),
  });

  const { id, courseName, courseDetails, bookImg, suggestedBooks } = course;
  return (
    <div className="container">
      <div ref={ref} className="p-3">
        <h3>Course ID: 3141412{id}</h3>
        <img src={bookImg} className="book-img my-3" alt="" />
        <h4>{courseName}</h4>
        <p className="card-details">{courseDetails}</p>
        <h4>Suggested Book:</h4>
        <p>{suggestedBooks}</p>
      </div>
      <div className="my-5 p-3 mx-auto ">
        <Link to={`/cart/${id}`}>
          <Button variant="success">Premium Access</Button>
        </Link>{" "}
        <br />
        <Button onClick={handlePrint} className="mt-2">
          <AiFillFilePdf /> Download Course Information
        </Button>
        <Toaster />
      </div>
    </div>
  );
};

export default CourseDetails;
