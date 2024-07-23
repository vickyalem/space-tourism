import React from "react";
import Header from "./Header";
import { useState } from "react";
import data from "../data.json";

export default function Technology() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="technology main-div">
      <Header />

      <main className="grid-container grid-container--tech flow">
        <h1 className="numbered-title">
          <span>03</span> Space launch 101
        </h1>

        <article className="tech-details flex">
          <div className="dot2-indicators flex">
            {[0, 1, 2].map((item) => {
              return (
                <button className={"fs-600 ff-serif" + (activePage === item ? " active" : "")} key={item} onClick={() => setActivePage(item)}>
                  {item}
                </button>
              );
            })}
          </div>

          <div>
            <header>
              <p className="uppercase fs-600 ff-serif">The terminilogy...</p>
              <h2 className="uppercase fs-700 text-white ff-serif">
                {data.technology[activePage].name}
              </h2>
            </header>
            <p className="text-accent">{data.technology[activePage].description}</p>
          </div>
        </article>

        <img src={data.technology[activePage].images.portrait} alt="" />
      </main>
    </div>
  );
}
