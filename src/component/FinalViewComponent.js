import React from 'react'

const FinalViewComponent = ({ finalQueue, onEnd, onReset }) => {
    const handleEndClick = () => {
        onEnd();
    };

    const handleResetClick = () => {
        onReset();
    };
console.log(finalQueue,"vdsfjgdgf")
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <div>
      <ul className="list-group">
        {finalQueue&&finalQueue.map((item, index) => (
            <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
        <h2>Final View:</h2>

      </div>
      <div className="border p-2 mb-2" style={{ borderColor: 'red', borderWidth: '50%', borderStyle: 'solid' }}>

        <button className="btn btn-danger mr-2" style={{width:"fit-Content"}} onClick={handleEndClick}>End</button>
        <button className="btn btn-warning" style={{width:"fit-Content"}} onClick={handleResetClick}>Reset</button>
      </div>
    </div>
  );
};

export default FinalViewComponent;
