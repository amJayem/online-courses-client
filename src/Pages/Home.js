import React from "react";
import { useLoaderData } from "react-router-dom";
import Card2 from "../components/Card2";
import CoursesCard from "../components/CoursesCard";
import Header from "../components/Header";

const Home = () => {
  const courses = useLoaderData();
  // console.log(courses);
  return (
    <div>
      {/* <Header></Header> */}
      <h1>Online Education for Everyone.</h1>
      {courses.map((course) => (
        <>
          {/* <CoursesCard key={course.id} course={course}></CoursesCard> */}
          <Card2 key={course.id} course={course}></Card2>
        </>
      ))}
    </div>
  );
};

export default Home;
