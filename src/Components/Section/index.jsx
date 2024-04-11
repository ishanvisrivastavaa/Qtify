import React, { useState } from "react";
import "./section.css";
import Card from "../Card";
import Carousel from "../Carousel";

function index({ title, data, navId}) {
  const [isCollapsed, setIsCollapse] = useState(false);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        <h1
          className="section-toggle-btn"
          onClick={() => {
            setIsCollapse(!isCollapsed);
          }}
        >
          {isCollapsed ? "Show all" : "Collapse"}
        </h1>
      </div>
      {isCollapsed ? (
        <Carousel navId={navId} data={data} />
      ) : (
        <div className="card-container">
          {data.map((card) => (
            <Card
              key={card.id}
              imgSrc={card.image}
              label={card.title}
              followerCount={card.follows}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default index;
