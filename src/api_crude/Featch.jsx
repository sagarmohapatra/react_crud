import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Featch = () => {
  const [store, setstore] = useState([]);
  const data = "https://jsonplaceholder.typicode.com/users";
  let df = async () => {
    let fg = await fetch(data);
    let vb = await fg.json();
    console.log(vb);
    setstore(vb);
  };
  useEffect(() => {
    df();
  }, []);
  const deletes = (index) => {
    if (window.confirm("are you sure to delete this person")) {
      const copystore = [...store];
      copystore.splice(index, 1);
      setstore(copystore);
    }
  };

  const [namess, setmess] = useState("");
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3 ">
          <div className="text-center">
            <input
              placeholder="serach here"
              value={namess}
              onChange={(e) => setmess(e.target.value)}
            />
          </div>
          <div>
            <button className="btn btn-success ">
              <Link to={"/create"} className="text-white text-decoration-none">
                create
              </Link>
            </button>
          </div>
        </div>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Sl no.</th>
                <th>Name</th>
                <th>email</th>
                <th>Phone</th>
                <th className="bg-danger text-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {store &&
                store
                  .filter((ele) => {
                    if (ele.length === 0) {
                      return ele;
                    } else {
                      return ele.name
                        .toLowerCase()
                        .includes(namess.toLowerCase());
                    }
                  })
                  .map((res, index) => (
                    <tr key={res.id}>
                      <td>{res.id}</td>
                      <td>{res.name}</td>
                      <td>{res.email}</td>
                      <td>{res.phone}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={(id) => deletes(index)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Featch;
