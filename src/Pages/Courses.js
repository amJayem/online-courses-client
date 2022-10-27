import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesCard from "../components/CoursesCard";
import RightNav from "../components/RightNav";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <h1>This is home page {courses.length} </h1>

      <div className="d-flex justify-content-evenly">
        <div className="right-nav">
          <Link>All courses</Link>
          <hr />
          <RightNav></RightNav>
        </div>

        <div>
          {courses.map((course) => (
            <CoursesCard key={course.id} course={course}></CoursesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
