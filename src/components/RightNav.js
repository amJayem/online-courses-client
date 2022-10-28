import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const RightNav = () => {
  const course = useLoaderData();
  // console.log(course);
  return (
    <div >
      <div className="">
        {course.map((crs) => (
          <ul>
            <li><Link to={`/course-details/${crs.id}`}>{crs.courseName}</Link></li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RightNav;
