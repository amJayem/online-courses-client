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
      <div className="container">
        <h1 className="mt-5">Available Courses</h1>
        <div className="book-grid my-5">
          {courses?.map((course, i) => (
            <div className="" key={i}>
              <Card2 key={course.id} course={course}></Card2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
