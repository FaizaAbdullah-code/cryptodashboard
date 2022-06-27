import React from "react";

function ChainID(props) {
  return (
    <>
      <section className="col-md-9 ms-sm-auto col-lg-10 px-md-3 pt-4 mt-5">
        <div className="row">
          <h1
            style={{ color: "#1e1e67", textAlign: "center" }}
            className="py-2"
          >
            Chain IDs
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover table-striped border border-primary border-1 rounded">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Label
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Chain ID
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Name
                    </th>
                  </tr>
                </thead>
                {props.holders.map((holder) => {
                  return (
                    <tbody>
                      <tr>
                        <td>
                          <img src={holder.logo_url} width="24px" alt="logo" />{" "}
                          {holder.label}
                        </td>
                        <td>{holder.chain_id}</td>
                        <td>{holder.name}</td>
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

export default ChainID;
