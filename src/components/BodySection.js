import React from "react";
import { Line } from "react-chartjs-2";

const BodySection = (props) => {
  return (
    <div>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-3 mb-3 py-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
                        className="fab fa-ethereum"
                        style={{ color: "#1e1e67", fontSize: "50px" }}
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

      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-3 py-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row d-flex justify-content-center">
          <div className="col-sm-5 me-3 bg-light shadow-md rounded">
            <h3 className="text-center py-3">Volume by Date</h3>
            <div>
              {props.volData && (
                <Line
                  data={props.volData}
                  key={props.volData.id}
                  height={220}
                />
              )}
            </div>
          </div>
          <div className="col-sm-5 bg-light shadow-md rounded">
            <h3 className="text-center py-3">Price by Date</h3>
            <div>
              {props.quoteData && (
                <Line
                  data={props.quoteData}
                  key={props.quoteData.id}
                  height={220}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-3 pt-4"
        id="tokenTable"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row">
          <h1
            style={{ color: "#1e1e67", textAlign: "center" }}
            className="py-2"
          >
            Top 10 Transactions
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover table-striped border border-primary border-1 rounded">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      From Address
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      To Address
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Gas Price
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Gas Quote
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Gas Quote Rate
                    </th>
                  </tr>
                </thead>
                {props.tokens.map((token) => {
                  return (
                    <tbody key={token.id}>
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
    </div>
  );
};

export default BodySection;
