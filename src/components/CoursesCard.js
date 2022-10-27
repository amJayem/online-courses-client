import React from "react";

const CoursesCard = ({ course }) => {
    console.log(course);
    const {courseName, courseDetails, bookImg } = course;
  return (
    <>
        <div className="text-white bg-base-100 p-5 rounded-xl mb-5">
            <div className="flex border- border-spacing-2">
                <img className="w-56" src={bookImg} alt="" />
                <div>
                    <h1 className="text-4xl">{courseName}</h1>
                    <p>{courseDetails.slice (0,250) + '...'}</p>
                </div>
            </div>
        </div>
      
    </>
  );
};

export default CoursesCard;
