import React, { useState } from "react";
import Header from "./Header";
import data from "../data.json";

export default function Crew() {

  const [activePage, setActivePage] = useState(0);

  return (
    <div className="crew main-div">
      <Header />
      <main className="grid-container grid-container--crew flow">
        <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
        
        <div className="dot-indicators flex">
          {[0,1,2,3].map((item) => {
            return <button className={activePage === item ? "active" : ""} key={item} onClick={() => setActivePage(item)}></button>
          })}
        </div>

        <article className="crew-details flow">
          <header>
            <h2 className="uppercase fs-600 ff-serif">{data.crew[activePage].role}</h2>
            <p className="uppercase fs-700 ff-serif">{data.crew[activePage].name}</p>
          </header>
          <p>
            {data.crew[activePage].bio}
          </p>
        </article>

        <img src={data.crew[activePage].images.png} alt="" />
      </main>
    </div>
  );
}
