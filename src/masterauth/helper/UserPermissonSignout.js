import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import {  SignOut, isAuthenticated } from "./index";
import { useHistory } from "react-router-dom";

const Menu = ({ history }) => (
  <div>
      {isAuthenticated() &&(
          <h6 className="pt-1" style={{textDecoration: 'none'}} onClick={() => 
            {
            SignOut(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </h6> 
      )}
  
  </div>
);

export default withRouter(Menu);
