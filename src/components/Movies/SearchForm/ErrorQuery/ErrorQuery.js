import React from 'react';
import './ErrorQuery.css';

const ErrorQuery = ({ errorName }) => {
  return (
    <div className="error-query">
      <div className="error-query__container">
        <p className="error-query__round">{errorName}</p>
      </div>
    </div>
  )
};

export default ErrorQuery