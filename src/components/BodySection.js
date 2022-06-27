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
                  <div className="card-box shadow-lg">
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
          <div className="col-sm-5 m-2 bg shadow-lg p-3 mb-5 rounded">
            <div>{props.volData && <Line data={props.volData} height={220}/>}</div>
          </div>
          <div className="col-5 m-2 bg shadow-lg p-3 mb-5 rounded">
            <div>{props.quoteData && <Line data={props.quoteData} height={220} />}</div>
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
        className="col-md-9 ms-sm-auto col-lg-10 px-md-5 mt-5 tableBg"
        id="tokenTable"
      >
        <div className="row">
          <h1 style={{ color: "white", textAlign: "center" }}>
            Top 10 Transactions
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "blue" }}>
                      from_address
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      to_address
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      gas_price
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      gas_quote
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
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
        className="col-md-9 ms-sm-auto col-lg-10 px-md-5 py-2 mt-5 tableBg"
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
                    <th scope="col" style={{ color: "blue" }}>
                      Contract Name
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      contract_address
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      total_liquidity
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
                      total_volume_24h
                    </th>
                    <th scope="col" style={{ color: "blue" }}>
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

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2 tableBg mt-5">
        <div className="col-sm-5">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ color: "blue" }}>
                   Chain ID
                  </th>
                  <th scope="col" style={{ color: "blue" }}>
                  Name
                  </th>
                </tr>
              </thead>
              {props.holders.map((holder) => {
                return (
                  <tbody>
                    <tr>
                      <td>{holder.chain_id}</td>
                      <td>{holder.name}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </section>
      {/* <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-5 py-3">
        <div className="container mt-5">
          <div className="row">
            {props.holders.map((holder) => {
              return (
                <div className="col-lg-3 col-sm-6 text-white">
                  <div className="address-sec">
                    <div className="address-box">
                      <div className="inner">
                        <p className="address"></p>
                        <h6></h6>
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
      </section> */}

      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-2 mt-5 tableBg">
        <div className="col-sm-6">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ color: "blue" }}>
                    sender name
                  </th>
                  <th scope="col" style={{ color: "blue" }}>
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
