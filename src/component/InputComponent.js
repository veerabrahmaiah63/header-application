import React, { useState } from "react";

const InputComponent = ({ onAdd }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    if (inputText.trim() !== "") {
      onAdd(inputText);
      setInputText("");
    }
  };

  return (
    <div className="mt-1 mb-3  ">
      <div className="row ">
        <div className="col-md-8 sm-8 lg-8 lx-8">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4 sm-4 lg-4 lx-4">
          <button className="btn btn-primary" onClick={handleAddClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
