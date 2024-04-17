import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [res, setres] = useState({ name: "sagar" });
  const [change_2, setchange_2] = useState(false);
  return (
    <div>
      <p>
        {change_2 ? "child" : "parent"}:-{res.name}
      </p>

      <Child res ={res} setres={setres} setchange_2={setchange_2} />
    </div>
  );
};

export default Parent;
