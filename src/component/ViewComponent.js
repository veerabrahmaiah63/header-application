import React from 'react'

const ViewComponent = ({ queue }) => {
  return (
    <div>
      <h2>Queue:</h2>
      <ul className="list-group">
        {queue.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewComponent;


