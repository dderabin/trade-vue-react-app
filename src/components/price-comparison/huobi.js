import React from "react";

const HuobiList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                <li key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USDTh`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}USDTh`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USDThb`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}USDThb`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                </li>

            )}
        </>
        
    );
}

export default HuobiList;