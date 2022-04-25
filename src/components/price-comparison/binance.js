import React from "react";

const BinanceList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                <li key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USDT`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}USDT`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}USDTb`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}USDTb`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                </li>
            )}
        </>
        
    );
}

export default BinanceList;