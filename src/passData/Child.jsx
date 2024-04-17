import React, { useState } from "react";

const Child = ({ res, setres, setchange_2 }) => {
  const [ch, setch] = useState({ name: "sipu" });
  const [change, setchange] = useState(false);
  const convert = () => {
    setres(ch);
    setchange(true);
    setchange_2(true);
  };
  return (
    <div>
      <h4>
       
        {change ? "child" : "parent"}:-{res.name}
      </h4>
      <button onClick={convert}>click</button>
    </div>
  );
};

export default Child;
