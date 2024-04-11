import React from "react";

function index({ data }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "570px",
        maxHeight: "500px",
        border: "5px solid red",
        overflowY: "auto",
        top: "60px",
        backgroundColor: "black",
      }}
    >
      {data.map((n) => (
        <div
          style={{
            display: "flex",
            height: "120px",
            width: "100%",
            border: "2px solid blue",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "100%",
              border: "2px solid yellow",
            }}
          >
            img
          </div>

          <div
            style={{
              flex: 1,
              border: "2px solid orange",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <p>Albums Names</p>
            <p
              style={{
                fontSize: "8px",
              }}
            >
              Albums name ashb jaknksf
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120px",
              height: "100%",
              border: "2px solid yellow",
              color: "white",
            }}
          >
            100 follows
          </div>
        </div>
      ))}
    </div>
  );
}

export default index;
