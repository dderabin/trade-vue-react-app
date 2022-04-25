import React from "react";

const TraderHistoryList = ({ traderHistoryList, onEditOpen }) => {
  return (
    <>
      {traderHistoryList.map((history, index) => (
        <tr key={index} onClick={()=>onEditOpen(true)}>
          <td style={{height: '38px'}}># {history.orderid}</td>
          <td style={{height: '38px'}}>{history.markettype}</td>
          <td style={{height: '38px'}}>{history.openprice}</td>
          <td style={{height: '38px'}}>{history.quantity}</td>
          
        </tr>
      ))}
    </>
  );
};

export default TraderHistoryList;
