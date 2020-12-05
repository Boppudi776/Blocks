import React from "react";

function Right({ handleRows, handleCols, selectedBlock }) {
  return (
    <div className="right-container px-3">
      <h6 className="mb-4">Blocks Config</h6>
      <div className="d-flex my-2">
        <span className="field-name mr-2">Row:</span>
        <input
          type="number"
          onChange={event => handleRows(event)}
        />
      </div>
      <div className="d-flex col-count">
        <span className="field-name mr-2">Column:</span>
        <input
          type="number"
          onChange={event => handleCols(event)}
        />
      </div>
      <p className="mt-4">
        Selected Block: 
      <strong>&nbsp; {selectedBlock}</strong></p>
    </div>
  );
}

export default Right;
