import React, { useState } from "react";
import Header from "./Header";
import data from "../data.json";

export default function Destination() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="destination main-div">
      <Header />
      <main className="grid-container grid-container--destination flow">
        <h1 className="numbered-title">
          <span>01</span> Pick your destination
        </h1>

        <img src={data.destinations[activeTab].images.png} alt="dfsdfs" />

        <div className="flex tab-list underline-indicators">
          {data.destinations.map((item, index) => {
            return (
              <button
                className={
                  "tab-btn uppercase ff-sans-cond text-accent letter-spacing-2" +
                  (index === activeTab ? " active" : "")
                }
                key={item.name}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <article className="destination-info flow">
          <h1 className="text-white fs-800 ff-serif uppercase letter-spacing-1">
            {data.destinations[activeTab].name}
          </h1>
          <p className="fs-400 ff-sans text-accent">
            {data.destinations[activeTab].description}
          </p>

          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase text-accent fs-200">Avg. distance</h3>
              <p className="uppercase ff-serif">
                {data.destinations[activeTab].distance}
              </p>
            </div>

            <div>
              <h3 className="uppercase text-accent fs-200">Est. travel time</h3>
              <p className="uppercase ff-serif">
                {data.destinations[activeTab].travel}
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
