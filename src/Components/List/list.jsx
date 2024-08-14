import React from 'react';
import './list.css';

const List = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No conditions available.</div>;
  }

  return (
    <div className="list-container">
      <h2>Diagnostic List</h2>
      <div className="list-header">
        <div className="list-header-item">Problem/Diagnosis</div>
        <div className="list-header-item">Description</div>
        <div className="list-header-item">Status</div>
      </div>
      <div className="list-body">
        {data.map((condition, index) => (
          <React.Fragment key={index}>
            <div className="list-row">
              <div className="list-item">{condition.name}</div>
              <div className="list-item">{condition.description}</div>
              <div className="list-item">{condition.status}</div>
            </div>
            {index < data.length - 1 && <hr className="list-separator" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
  
};

export default List;
