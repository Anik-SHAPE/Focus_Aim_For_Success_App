import React from "react";
import { API } from "../../backend";
import DefaultImg from "../../assets/images/noimgfound.png"

const subjectPhoto = ({subject}) => {
  const imageurl = subject
    ? `${API}/subject/photo/${subject._id}`
    : <img src={DefaultImg}/>;
  return (
      <img className="d-block w-100 h-100 img-fluid"
        src={imageurl}
        alt="photo"        
      />
 
  );
};

export default subjectPhoto;
