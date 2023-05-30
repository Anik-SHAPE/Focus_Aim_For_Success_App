import React from "react";
import { withRouter } from "react-router-dom";
import {  SignOut, isAuthenticated } from "./index";

const Menu = ({ history }) => (
  <div>
      {!isAuthenticated() && (
          <h5 className="my-auto" style={{textDecoration: 'none'}} >Sign In</h5>
      )}
      {isAuthenticated() &&(
          <h5 className="pt-1" style={{textDecoration: 'none'}} onClick={() => 
            {
            SignOut(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </h5> 
      )}
      
  
  </div>
);

export default withRouter(Menu);
