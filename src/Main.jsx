import React from "react";
import './Main.css'

function Main({ data }) {
  console.log(data);
  return (
    <div className="main">
      {data.map((item, id) => (
        <>
        <div className="b">
          <h1>{item.name}</h1>
          <h2> venue:{item.venue}</h2>
          <h3> Date:{item.date}</h3>
          <h4> {item.teams[0]} vs {item.teams[1]}</h4>
          <h5>result:{item.status}</h5>
          </div>
        </>
      ))}
    </div>
  );
}

export default Main;
