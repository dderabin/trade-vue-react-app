import React from "react";

const FtxList = ({coinList}) => {

    return (
        <>
            {coinList.map((coin, index) =>
                <li className="hidden" key={index}>
                    <span style={{display: 'none'}} id={`o${coin.symbol}-PERP`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}-PERP`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                    <span style={{display: 'none'}} id={`o${coin.symbol}-PERPb`}></span>
                    <span style={{color: 'black'}} id={`${coin.symbol}-PERPb`}>{parseFloat(coin.quote.USD.price).toFixed(3)}</span>
                </li>
            )}
        </>
        
    );
}

export default FtxList;