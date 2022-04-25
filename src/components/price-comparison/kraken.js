import React from "react";

const KrakenList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}/USD`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}/USD`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}/USDb`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}/USDb`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                </li>
            )}
        </>
        
    );
}

export default KrakenList;