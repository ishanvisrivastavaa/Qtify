import React, { useState } from "react";
import Carousel from "../Carousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./fsection.css";

function index({ title, data, filter, executeFilter }) {
  const [selectedTab, setSelectedTab] = useState("jazz");

  return (
    <div className="section">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(filter[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
      >
        {filter.map((f) => (
          <Tab className="tab" key={f.key} label={f.label} />
        ))}
      </Tabs>
      <Carousel data={data} navId={filter}/>
    </div>
  );
}

export default index;
