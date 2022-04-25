import React from "react";

const BitmexList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`oXBTUSD`}></span>
                    <span style={{color: 'black'}} id={`XBTUSD`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                    <span style={{display: 'none'}} id={`oXBTUSDb`}></span>
                    <span style={{color: 'black'}} id={`XBTUSDb`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                </li>
            )}
        </>
        
    );
}

export default BitmexList;