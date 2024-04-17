import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowToggle from "./ShowToggle";
const FormValidation = () => {
  const [val, setval] = useState({
    name: "",
    mail: "",
  });

  const [store, setstore] = useState([]);
  const [up, setup] = useState({});
  console.log(up);
  console.log(store);
  const put = (e) => {
    const copyval = { ...val };
    copyval[e.target.name] = e.target.value;
    setval(copyval);
  };
  const [nameval, setnameval] = useState("");
  const [namecon, setnamecon] = useState(false);

  const [mailval, setmailval] = useState("");
  const [mailcon, setmailcon] = useState(false);

  const update = (e) => {
    const names = namevalidation(val.name);
    const mails = mailvalidation(val.mail);
    e.preventDefault();
    if (names && mails) {
      const copystore = [...store];
      copystore.push(val);
      setstore(copystore);
      setval({
        name: "",
        mail: "",
      });
    }
  };

  const namevalidation = (namelast) => {
    if (namelast) {
      if (/^[a-zA-Z]+(?:-[a-zA-Z]+)*$/.test(namelast)) {
        setnameval("");
        setnamecon(true);
        return true;
      } else {
        setnameval("plz enter your correct name");
        setnamecon(false);
        return false;
      }
    } else {
      setnameval("plz enter your name");
      setnamecon(false);
      return false;
    }
  };

  const mailvalidation = (maillast) => {
    if (maillast) {
      if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(maillast)) {
        setmailval("");
        setmailcon(true);
        return true;
      } else {
        setmailval(" plz enter your valid mail");
        setmailcon(false);
        return false;
      }
    } else {
      setmailval("plz enter your mail");
      setmailcon(false);
      return false;
    }
  };

  const delet = (i) => {
    const copyst = [...store];
    copyst.splice(i, 1);
    setstore(copyst);
  };

  const [show, setshow] = useState(false);
  const [idStore, setidStore] = useState("");
  // console.log(idStore);
  const read = () => {
    setshow(true);
  };

  const edits = (res) => {
    let cv = store.filter((ele) => ele.name === res);
    console.log("dfgyh", store);
    console.log(res);
    console.log(cv);
    setup(cv[0]);
  };

  const modify = (e) => {
    const copyup = {...up};
    copyup[e.target.name] = e.target.value;
    setup(copyup)
  };
  const updates=(e)=>{
    e.preventDefault()
    const copystore=[...store]
    copystore.push(up)
    setstore(copystore)
    
  }
  const [ser,setser]=useState("")
  return (
    <div className="container mt-5 ">
    <input placeholder="serach here" value={ser} onChange={(e)=>setser(e.target.value)} />
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <h4 className="text-center">Form</h4>
            <div className="card-body">
              <form onSubmit={update}>
                <input
                  placeholder="name"
                  name="name"
                  className="mb-3 form-control"
                  value={val.name}
                  onChange={put}
                />
                {namecon ? <p style={{ color: "red" }}>{nameval}</p> : null}
                <br />
                <input
                  placeholder="mail"
                  name="mail"
                  className="mb-3 form-control"
                  value={val.mail}
                  onChange={put}
                />
                <p> {mailcon ? <p>{mailval}</p> : null}</p>
                <button className="btn btn-success" type="submit">
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <h5 className="text-center bg-success text-white">Update Form</h5>
            <div className="card-body">
              <form onSubmit={updates}>
                <input
                  placeholder="name"
                  name="name"
                  className="mb-3"
                  value={up && up.name}
                  onChange={modify}
                />{" "}
                <br />
                <input
                  placeholder="mail"
                  name="mail"
                  className="mb-3"
                  value={up && up.mail}
                  onChange={modify}
                />{" "}
                <br />
                <button type="text" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>sl no.</th>
              <th>name</th>
              <th>Mail</th>
              <th className="bg-danger text-white">Delete</th>
              <th className="bg-success text-white ml-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            { store.filter((dsa)=>{
            
                return dsa.name.toLowerCase().includes(ser.toLowerCase())
              
            }).map((res, id) => (
              <tr key={id}>    
                <td>{id + 1}</td>
                <td>{res.name}</td>
                <td>{res.mail}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => delet(id)}>
                    delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => edits(res.name)}
                  >
                    edit
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      read();
                      setidStore(res.name);
                    }}
                  >
                    Read
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ShowToggle
        show={show}
        setshow={setshow}
        store={store}
        idStore={idStore}
      />
    </div>
  );
};

export default FormValidation;
