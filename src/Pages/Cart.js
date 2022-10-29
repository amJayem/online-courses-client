import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const course = useLoaderData();
    return (
        <div className='container'>
            <h1>Welcome to Checkout</h1> <hr />
            <h3>Course Name: {course.courseName}</h3>
            <h4>Course ID: {course.id}</h4>
            <p>Suggested Book: {course.suggestedBooks}</p>
        </div>
    );
};

export default Cart;