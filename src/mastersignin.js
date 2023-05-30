import React from 'react';
import useState from "react-hook-use-state";
import {Redirect} from "react-router-dom";
import {SignIn, authenticate, isAuthenticated} from "./masterauth/helper/index";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Logo from "./assets/images/logo.jpg";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import Chip from '@material-ui/core/Chip';

const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        didRedirect: false
    });

    const { email, password, error, didRedirect} = values;

    const { user } = isAuthenticated();

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false});
        SignIn({ email, password })
          .then(data => {
            if (data.error) {
              console.log("signin request failed");
              setValues({ ...values, error: data.error });
            } else {
              authenticate(data, () => {
                setValues({
                  ...values,
                  didRedirect: true
                });
              });
            }
            console.log("logged in")
          })
      };
    
      const performRedirect = () => {
        if (didRedirect) {
          if (user && user.role === 1) {
            return <Redirect to="/manage/console/admin" />;
          }
          if (user && user.role === 0) {
            return <Redirect to="/manage/console/writter" />;
          }
          if (user && user.role === 2) {
            return <Redirect to="/courses" />;
          }
        }
        if (isAuthenticated()) {
          return <Redirect to="/manage/console/signin" />;
        }
      };
    
      const errorMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <div
                className="alert alert-danger"
                style={{ display: error ? "" : "none" }}
              >
                {error}
              </div>
            </div>
          </div>
        );
      };

      const SigninForm = () => {
          return(
              <div>
              <div className="container">
                &nbsp;&nbsp;
                <center><img src={Logo}  width="140" height="140"/><br/><Chip style={{backgroundColor: "#2B2B52", color: "#76ff03", fontSize: 20}} className="shadow m-2" label="Management Console"/></center>
                &nbsp;
                <Card  style={{backgroundColor: '#ffffff', borderRadius: 10}} className="m-lg-5 shadow" >
                    <div className="card-header" >
                    <h2 className="text-success ml-1">Sign In</h2>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input className="form-control" style={{backgroundColor: '#f0f0f0'}} onChange={handleChange("email")} value={email} id="email" 
                                type="text" placeholder="Email-Id"/>
                        </div>
                        <div className="form-group">
                            <input className="form-control"  style={{backgroundColor: '#f0f0f0'}} onChange={handleChange("password")} value={password} id="password"
                                type="password" placeholder="Password"/>
                        </div>
                        <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block ">Signin</button>
                    </form>
                    </div> 
                   <div className="container">
                    <a href="/"><h6 className="pl-1" style={{color: "#f50057"}}>Goto Home Page?</h6></a>               
                  </div>                    
                    </div>        
                </Card>
                </div>
                &nbsp;&nbsp;
                <footer className="footer sticky-bottom" style={{backgroundColor: "#101010"}}>
                <div className="container">
                <div className="col pt-4 pb-4">
                    <div className="row">
                    <div className="col-sm d-block w-100 h-100">
                        <div className="container-fluid">
                            <h4 className="text-white py-4"><strong>About Us</strong></h4>
                            <article style={{color: "#B2EBF2", fontsize: "18px", fontfamily:'Segoe UI'}}>Focus is an online learning platform where you can prepare yourself for your desired Govenment Jobs. </article>
                            <div className="container pt-2 pl-0">
                            <a className="text-decoration-none" href="https://www.facebook.com/focus.m4.success/" target="_blank"><ion-icon name="logo-facebook"  style={{color: "#DAE0E2"}}></ion-icon>&nbsp;</a>
                            <a className="text-decoration-none" href="https://www.instagram.com/focus.m4.success/" target="_blank"><ion-icon name="logo-instagram" style={{color: "#DAE0E2"}}></ion-icon>&nbsp;</a>
                            <a className="text-decoration-none" href="#" target="_blank"><ion-icon name="logo-twitter"   style={{color: "#DAE0E2"}}></ion-icon>&nbsp;</a>
                            <a className="text-decoration-none" href="#" target="_blank"><ion-icon name="logo-linkedin"  style={{color: "#DAE0E2"}}></ion-icon>&nbsp;</a>
                            <a className="text-decoration-none" href="https://www.youtube.com/channel/UCqKyqZkMS0qR-NX1m2TpYLA?view_as=subscriber" target="_blank"><ion-icon name="logo-youtube"   style={{color: "#DAE0E2"}}></ion-icon>&nbsp;</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm d-block w-100 h-100">
                        <div className="container-fluid">
                            <h4 className="text-white py-4"><strong>Our Services</strong></h4>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Online Courses</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Live Teaching</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Govt. Job Preparations</a><br/>
                        </div>
                    </div>


                    <div className="col-sm d-block w-100 h-100">
                        <div className="container-fluid">
                            <h4 className="text-white py-4 "><strong>Our Courses</strong></h4>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>W.B.C.S</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>P.S.C</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>MISC.</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>POLICE</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>GROUP-D</a><br/>
                            <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>RAIL & W.B.S.S.C</a><br/>

                        </div>
                    </div>

                    <div className="col-sm d-block w-100 h-100">
                      <div className="container-fluid">
                        <h4 className="text-white py-4"><strong>Contact Us</strong></h4>
                        <a href="#" className="text-decoration-none pt-3" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}> <CallIcon/> Contact Us :  <br/> +91 9153402828 <br/>
                        +91 9641539738</a><br/>
                        <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}> <EmailIcon/> Email Us : &nbsp; focus.m4.success@gmail.com</a><br/>
                      </div>
                    </div> 

                    
                    </div>
                </div>
                </div>
                <div className="container">
                    <span className="text-muted">
                    <center> Copyright © 2020 | All Rights Reserved - <span className="text-white">Focus - Aim For Success | </span> This software is brought to you by <span className="text-white"> <a href="https://www.taitanosoft.com/" style={{textDecoration: "none"}}>Taitanosoft</a></span></center>
                    </span>
                </div>
            </footer>
            
        </div>
          )
      }

    return (
       <div>
        {errorMessage()}
        {SigninForm()}
        {performRedirect()}
       </div>
    )
}

export default Signin;
