import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import './App.css';

export default function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [selectedBlock, setBlock] = useState(0)

  const handleRows = val => {
    setRows(parseInt(val));
  };

  const handleCols = (val = 0) => {
    setCols(parseInt(val));
  };

  const handleSelect = (val = 0) => {
    setBlock(val);
  };
  return (
    <div className="container mt-4">
      <Left rows={rows} cols={cols}
      handleSelect={val => handleSelect(val)} 
      selectedBlock={selectedBlock}
      />
      <Right
        handleRows={event => handleRows(event.target.value)}
        handleCols={event => handleCols(event.target.value)}
        
        selectedBlock={selectedBlock}
      />
    </div>
  );
}
