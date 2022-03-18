import MediaQuery from "react-responsive";

const MainHeader = () => {
  return (
    <header style={{ marginBottom: 100 }}>
      <MediaQuery minWidth={1300}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <div
              style={{
                maxWidth: "100%",
                height: 50,
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <div style={{ width: "100%" }}>
                <h1>DYLAN PAYNE</h1>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <h1>
                  Contact <span style={{ color: "#EF233C" }}>{"=>"}</span>
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>
              WEB <span style={{ color: "#EF233C" }}>&&</span> GRAPHIC DESIGN
            </h1>
          </div>
          <div
            style={{
              width: "100%",
              height: 50,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <h1>
              CAPE TOWN <span style={{ color: "#EF233C" }}>||</span> SOUTH
              AFRICA
            </h1>
          </div>
        </div>
        <br />
        <hr />
      </MediaQuery>
      <MediaQuery maxWidth={1300}>
        <div
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div>
            <h1>DYLAN PAYNE</h1>
          </div>
          <div>
            <h1>
              WEB <span style={{ color: "#EF233C" }}>&&</span> GRAPHIC DESIGN
            </h1>
          </div>
          <div>
            <h1>
              CAPE TOWN <span style={{ color: "#EF233C" }}>||</span> SOUTH
              AFRICA
            </h1>
          </div>
          <div>
            <h1>
              CONTACT <span style={{ color: "#EF233C" }}>{"=>"}</span>
            </h1>
          </div>
        </div>
        <br />
        <hr />
      </MediaQuery>
    </header>
  );
};

export default MainHeader;
