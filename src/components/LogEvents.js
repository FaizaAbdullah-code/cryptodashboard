import React from "react";
// import { Line } from "react-chartjs-2";

function LogEvents(props) {
  return (
    <>
      <section
        className="col-md-9 ms-sm-auto col-lg-10 px-md-3 pt-4 mt-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="row">
          <h1
            style={{ color: "#1e1e67", textAlign: "center" }}
            className="py-2"
          >
            Latest Covalent Coin Log Events
          </h1>
          <div className="col-sm">
            <div className="table-responsive">
              <table className="table table-hover table-striped border border-primary border-1 rounded">
                <thead>
                  <tr>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Tx Hash
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Raw Log Topics
                    </th>
                    <th scope="col" style={{ color: "#2c2f4c" }}>
                      Type
                    </th>
                  </tr>
                </thead>
                {props.events.map((event) => {
                  return (
                    <tbody>
                      <tr>
                        <td>{event.tx_hash}</td>
                        <td>{(event.raw_log_topics).join(", ")}</td>
                        <td>{event.decoded.name}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          {/* <div className="col-sm-5 m-2 bg shadow-lg rounded">
            <div>
              {props.swapData && <Line data={props.swapData} height={190} />}
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default LogEvents;
