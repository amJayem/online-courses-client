import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card2 = ({course}) => {    
  const { courseName, courseDetails, bookImg } = course;
    return (
        <div className='mt-5'>
            <div className='book-card mb-3 p-3 mx-auto my-0'>
                <img src={bookImg} className='book-img' alt="" />
                <h4>{courseName}</h4>
                <p className='card-details'>{courseDetails.slice(0,250) + '...'}</p>
                <Link to={`/course-details/${course.id}`} className="text">
                    <Button>Details</Button>
                </Link>
            </div>
        </div>
    );
};

export default Card2;