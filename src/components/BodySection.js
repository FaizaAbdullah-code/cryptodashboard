import React from "react";
import { Line } from "react-chartjs-2";
// import { Bar } from "react-chartjs-2";

const BodySection = (props) => {
  return (
    <div>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">
        <div className="container mt-5">
          <div className="row">
            {props.rates.map((rate) => {
              return (
                <div className="col-lg-3 col-sm-6" key={rate.id}>
                  <div className="card-box">
                    <div className="inner">
                      <h3>${rate.quote_rate}</h3>
                      <p>
                        {rate.contract_name} ({rate.contract_ticker_symbol})
                      </p>
                    </div>
                    <div className="icon">
                      <i
                        className="fas fa-hand-holding-usd"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <a href="/" className="card-box-footer">
                      View more <i className="fa fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
        <div className="row">
          <div className="col-sm-6">
            <div>{props.volData && <Line data={props.volData} />}</div>
          </div>
          <div className="col-6">
            <div>{props.quoteData && <Line data={props.quoteData} />}</div>
          </div>
        </div>
      </section>

      {/* <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
        <div className="row">
          <div className="col-6">
            <div>{props.quoteData && <Line data={props.quoteData} />}</div>
          </div>
        </div>
      </section> */}

      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2"
        id="tokenTable"
      >
        <div className="row py-3">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Top 10 Transactions
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      from_address
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      to_address
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      gas_price
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      gas_quote
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      gas_quote_rate
                    </th>
                  </tr>
                </thead>
                {props.tokens.map((token) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{token.from_address}</td>
                        <td>{token.to_address}</td>
                        <td>{token.gas_price}</td>
                        <td>{token.gas_quote}</td>
                        <td>{token.gas_quote_rate}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>

      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2"
        id="networkExTkTable"
      >
        <div className="row py-3">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Network Exchange Tokens on uniswap_v2
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      Contract Name
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      contract_address
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      total_liquidity
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      total_volume_24h
                    </th>
                    <th scope="col" style={{ color: "#f2b92c" }}>
                      swap_count_24h
                    </th>
                  </tr>
                </thead>
                {props.networkExTk.map((netExTk) => {
                  return (
                    <tbody>
                      <tr>
                        {/* <td></td> */}
                        <td>
                          {netExTk.contract_name} (
                          {netExTk.contract_ticker_symbol})
                        </td>
                        <td>{netExTk.contract_address}</td>
                        <td>{netExTk.total_liquidity}</td>
                        <td>{netExTk.total_volume_24h}</td>
                        <td>{netExTk.swap_count_24h}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">
        <div className="container mt-5">
          <div className="row">
            {props.holders.map((holder) => {
              return (
                <div className="col-lg-3 col-sm-6">
                  <div className="address-sec">
                    <div className="address-box">
                      <div className="inner">
                        <p className="address">{holder.name}</p>
                        <h6>{holder.chain_id}</h6>
                      </div>
                      <div className="icon">
                        <i className="fas fa-wallet" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2">
        <div className="col-sm-8">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ color: "#f2b92c" }}>
                    sender name
                  </th>
                  <th scope="col" style={{ color: "#f2b92c" }}>
                    sender address
                  </th>
                </tr>
              </thead>
              {props.events.map((event) => {
                return (
                  <tbody>
                    <tr>
                      <td>{event.sender_name}</td>
                      <td>{event.sender_address}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </section>

      {/* <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {props.pieData && <Line data={props.pieData} />}
      </section> */}

      <footer className="page-footer font-small mt-5">
        <div className="footer-copyright text-center py-3 ">
          <a href="#! ">© 2021 - AE & Team </a>
        </div>
      </footer>
    </div>
  );
};

export default BodySection;
