import React from 'react';

const Row = ({rows, cols, handleSelect, selectedBlock = 0}) => {
    const createRow = () => {
        let rowData = [];
        for(let i = 0; i < rows; i++){
            let colData = [];
            var blockVal = 0;
            for(let j = 0; j < cols; j++){
                blockVal++;
                colData.push(<div className={`block text-white bg-success py-2 px-3 m-2 ${selectedBlock === blockVal ? 'active' : ''}`}
                onClick = {() => handleSelect(blockVal)}
                key={blockVal}
                id={blockVal}>
                    {blockVal}
                </div>);
            }
            rowData.push(<div className="row" key={blockVal}>{colData}</div>);
        }
        return rowData;
        }
    return (
        <div>
         {createRow()}
        </div>
    )
}

export default Row;
