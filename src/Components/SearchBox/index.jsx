import React from "react";
import Menu from "../Menu";

function index() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <form
        style={{
          display: "flex",
          minWidth: "570px",
        }}
      >
        <input
          placeholder="Search an album of your choice"
          style={{
            flex: 1,
            borderRadius: "8px 0px 0px 8px",
            padding: "8px",
          }}
        />
        <button
          style={{
            width: "66px",
            height: "48px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0px 8px 8px 0px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <img src="iconsearch.png" />
        </button>
      </form>
      {/* <Menu data={[1, 2, 3, 4]} /> */}
    </div>
  );
}

export default index;
