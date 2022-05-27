import React from "react";

const TraderHistoryList = ({ traderHistoryList, onEditOpen }) => {
  console.log('traderHistoryList =>', traderHistoryList)

  return (
    <>
      {traderHistoryList.map((history, index) => (
        <tr style={{fontWeight: 'bold', textAlign: 'center'}} key={index} onClick={() => onEditOpen(true)}>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history._id}</td>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history.exchangePlatform}</td>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history.symbol.from}</td>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history.symbol.to}</td>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history.entryPrice}</td>
          <td style={{ height: '38px', fontSize: '0.7rem', textAlign: 'center'}}>{history.stopLoss}</td>
          <td style=
            {{
              height: '38px',
              fontSize: '0.7rem', textAlign: 'center',
              color: history.state === 'closedWithError' || history.state === 'closedByStopLoss' ? 'red'
                : history.state === 'closedByLastTarget' || history.state === 'closedByMiddleTargets' || history.state === 'inPosition' ? 'orange'
                  : history.state === 'ordered' ? 'green' : 'black'
            }}>
            {history.state}
          </td>
        </tr>
      ))}
    </>
  );
};

export default TraderHistoryList;
