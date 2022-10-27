import React from "react";
import { useLoaderData } from "react-router-dom";
import CoursesCard from "../components/CoursesCard";

const Home = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <h1>This is home page {courses.length} </h1>
      {
        courses.map(course=>
          <CoursesCard 
          key={course.id}
          course = {course}
          >

          </CoursesCard>
          )
      }
    </div>
  );
};

export default Home;
