import { Dialog } from "@mui/material";
import React from "react";

const ShowToggle = ({ show, setshow, store, idStore }) => {
  const handleClose = () => {
    setshow(false);
  };
  let fildata = store.filter((res) => res.name === idStore);
  // console.log(store);
  // console.log(idStore);
  console.log(fildata);
  return (
    <div>
      <Dialog
        open={show}
        onClose={handleClose}
        PaperProps={{
          sx: { width: "50%", maxHeight: 200, height: "50%", maxWidth: 400 },
        }}
      >
        <div className="card">
          <div className="card-body mt-3 text-center">
            {fildata.map((res) => (
              <>
                <p className="mb-3">{res.name}</p>
                <p className="mb-3">{res.mail}</p>
              </>
            ))}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ShowToggle;
