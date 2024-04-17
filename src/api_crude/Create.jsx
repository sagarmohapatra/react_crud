import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Featch from "./Featch";

const Create = () => {
  const [detail, setdetail] = useState({
    name: "",
    email: "",
    phone: "",
  });
  
    const put = (e) => {
    const copydetail = { ...detail };
    copydetail[e.target.name] = e.target.value;
    setdetail(copydetail);
  };
  const navigate = useNavigate();
  const add = async (e) => {
    e.preventDefault();
    console.log("gdgd");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    navigate("/featch");
  };
  return (
    <div>
      <div className="text-center mt-5">
        <div className="card">
          <form onSubmit={add}>
            <input
              type="text"
              placeholder="name"
              value={detail.name}
              name="name"
              onChange={put}
              className="mb-3"
            />
            <br />
            <input
              type="text"
              placeholder="email"
              value={detail.email}
              name="email"
              onChange={put}
              className="mb-3"
            />
            <br />
            <input
              type="text"
              placeholder="phone"
              value={detail.phone}
              name="phone"
              onChange={put}
              className="mb-3"
            />
            <br />
            <button className="btn btn-success" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
   
  );
 
};

export default Create;
