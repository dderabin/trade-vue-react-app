import React, { useState } from 'react';
import tableArrow_icon from "./../../assets/img/icons/table-arrow.svg";

const Portfolio = () => {
  const [toogle, setToogle] = useState(0);

  const showToogle = (i) => {
    if (i === toogle) {
      setToogle(0);
    } else {
      setToogle(i);
    }
  };

  return (
    <div className="row portfolio-page">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead className="bg-white">
            <tr>
              <th className="thincell"> </th>
              <th scope="col" className="text-center">
                Trade
              </th>
              <th scope="col" className="text-center font ps-4">
                Exchange
                <img
                  src={tableArrow_icon}
                  alt=""
                  className="img-fluid margin"
                />
              </th>
              <th scope="col" className="text-center font">
                Source
                <img
                  src={tableArrow_icon}
                  alt=""
                  className="img-fluid margin"
                />
              </th>
              <th scope="col" className="text-center font">
                Date
                <img
                  src={tableArrow_icon}
                  alt=""
                  className="img-fluid margin"
                />
              </th>
              <th scope="col" className="text-center font">
                OrderID
                <img
                  src={tableArrow_icon}
                  alt=""
                  className="img-fluid margin"
                />
              </th>
              <th scope="col" className="text-center font">
                Investment (USD)
                <img
                  src={tableArrow_icon}
                  alt=""
                  className="img-fluid margin"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="small" onClick={() => showToogle(1)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Copy Trader</td>
              <td className="text-center">20-May-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$750</td>
            </tr>
            {toogle === 1 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(2)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">21-May-2022</td>
              <td className="text-center">2114</td>
              <td className="text-center invest">$850</td>
            </tr>
            {toogle === 2 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            {/* <tr>
              <td className="small" onClick={() => showToogle(3)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 3 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(4)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 4 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(5)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 5 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(6)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 6 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(7)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 7 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(8)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 8 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )}
            <tr>
              <td className="small" onClick={() => showToogle(9)}>
                <img
                  src="/img/uploads/plus.svg"
                  alt=""
                  className="img-fluid text-center cursor-pointer"
                />
              </td>
              <td className="text-center">ETHUSDT</td>
              <td className="text-center">Universal</td>
              <td className="text-center">Signal Provider</td>
              <td className="text-center">22-Feb-2022</td>
              <td className="text-center">2113</td>
              <td className="text-center invest">$300</td>
            </tr>
            {toogle === 9 && (
              <div className="toggle">
                <p>
                  <strong>Take Profit 1:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 2:</strong> 0.00
                </p>
                <p>
                  <strong>Take Profit 3:</strong> 0.00
                </p>
                <p class="mb-0">
                  <strong>Take Profit 4:</strong> 0.00
                </p>
              </div>
            )} */}
          </tbody>
        </table>
      </div>
      <div className="row mt-4">
        <div className="col-xl-3 col-lg-3 col-12 my-auto">
        </div>
        <div className="col-xl-9 col-lg-9 col-12 text-end mob-mt-3">
          <div className="btn-group">
            <a href="/" className="btn btn-light">
              Previous
            </a>
            <a href="/" className="btn btn-light active">
              1
            </a>
            {/* <a href="/" className="btn btn-light">
              2
            </a>
            <a href="/" className="btn btn-light">
              3
            </a>
            <a href="/" className="btn btn-light">
              4
            </a>
            <a href="/" className="btn btn-light">
              5
            </a>
            <a href="/" className="btn btn-light">
              6
            </a>
            <a href="/" className="btn btn-light">
              7
            </a>
            <a href="/" className="btn btn-light">
              8
            </a> */}
            <a href="/" className="btn btn-light">
              Next
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
