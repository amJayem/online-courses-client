import React from "react";
import { useLoaderData } from "react-router-dom";
import Card2 from "../components/Card2";
import Header from "../components/Header";

const Home = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      <Header></Header>
      <h1 className="container">Available Courses</h1>
      {courses.map((course) => (
        <>
          <Card2 key={course.id} course={course}></Card2>
        </>
      ))}
    </div>
  );
};

export default Home;
