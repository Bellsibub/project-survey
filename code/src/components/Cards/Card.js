import React from 'react';

import './Card.css';

import Inputs from 'components/Inputs/Inputs';

const Card = (props) => {
  const getContent = () => {
    switch (props.contentType) {
      case 'question':
        return (
          <>
            <h3>Question {props.number}</h3>
            <p>{props.question}</p>
            <h3>My Answer</h3>
            <Inputs {...props} />
          </>
        );
      case 'submission':
        return (
          <>
            <h3>Submission</h3>
            <button type="submit">SUBMIT</button>
          </>
        );
      case 'summary':
        return (
          <>
            <h3>Summary</h3>
            <p>Thank you for participating!</p>
            {Object.entries(props.data).map(([key, value]) => (
              <p key={key}>{value}</p>
            ))}
          </>
        );
      default:
        return null;
    }
  };
  return <div className="card">{getContent()}</div>;
};

export default Card;
