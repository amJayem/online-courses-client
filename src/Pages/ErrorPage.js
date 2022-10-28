import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h1>Error!!</h1>
            <h2>Sorry.. The route is not defined</h2>
            <p>Go back to<Link to='/'> home page</Link></p>
        </div>
    );
};

export default ErrorPage;