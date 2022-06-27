import React from "react";

function NetworkExTk(props) {
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-3 pt-4 mt-5"
        id="networkExTkTable"
      >
        <div className="row">
          <h1
            style={{ color: "#1e1e67", textAlign: "center" }}
            className="py-2"
          >
            Network Exchange Tokens on uniswap_v2
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover table-striped border border-primary border-1 rounded">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Contract Name
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Contract Address
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Total Liquidity
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Total Volume
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Swap Count
                    </th>
                  </tr>
                </thead>
                {props.networkExTk.map((netExTk) => {
                  return (
                    <tbody>
                      <tr>
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
    </>
  );
}

export default NetworkExTk;
