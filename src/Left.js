import React from "react";

import Row from './Row';

function Left({ rows = 0, cols = 0, handleSelect, selectedBlock }) {
  return (
    <div className="left-container">
      <h6 className="mb-4">Block Display</h6>
      <div className="my-3">
        {rows && cols ?  <Row 
        rows={rows}
        cols={cols}
        handleSelect={val => handleSelect(val)}
        selectedBlock={selectedBlock}
      /> : <p className="font-weight-bold">There is no blocks to display</p>
        }
      </div>
      <div>
          Total Blocks:
        <strong>
          &nbsp;
        {rows * cols}
        </strong>
       </div>
    </div>
  );
}

export default Left;