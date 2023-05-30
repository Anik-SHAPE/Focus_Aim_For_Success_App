import React from "react";
import { API } from "../../backend";
import DefaultImg from "../../assets/images/noimgfound.png"

const questionPhoto = ({question}) => {
  const imageurl = `${API}/question/photo/${question._id}`

  return (
    <center>
      <img className="d-block img-fluid m-2" width="200" height="200" alt="" onerror="this.style.display='none'"
        src={imageurl}       
      />
      </center>
 
  );
};

export default questionPhoto;
