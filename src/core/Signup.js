import React from 'react';
import useState from "react-hook-use-state";
import {Redirect} from "react-router-dom";
import {SignIn, authenticate, isAuthenticated} from "../masterauth/helper/index";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Logo from "../assets/images/logo.jpg";
import {SignUp} from "../masterauth/helper/index";
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Signup = () => {

    const [values, setValues] = useState({
       
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        photo: "",
        error: "",
        publish: false,
        loading: false,
        success: false,
        formData: new FormData()
      });

    const {firstname, lastname, email, photo, phone, password, role, error, publish, loading, success, formData} = values;
    const {user, token} = isAuthenticated();

    const handleChange = name => event => {
      const value = name === "photo" ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setValues({...values, error: false, [name]: event.target.value});
    }

    const onSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true });
    
        // request to backend
        SignUp(formData)
        .then(data => {
          if(data.error){
            setValues({...values, error: data.error, success: false})
          }else{
            setValues({
              ...values,
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              photo: "",
              password: "",
              error: "",
              success: true
            });
          }
        })
      };

      const successMessage = () => {
        if (success) {
          return (
            <div className="row pt-3 pb-3" >
              <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success shadow"  style={{ borderRadius: 30}}>
                  <center> <h4 className="text-success my-auto">Account Created Succesfully</h4> 
                  <h5>Please <a href="/signin"> Signin </a> to access all subjects</h5>
                  </center>
                </div>
              </div>
            </div>  
          )
        }
      };


      const SignupForm = () => {
          return(
              <div>
              <div className="container">
                &nbsp;
                <Card  style={{backgroundColor: '#ffffff', borderRadius: 10}} className="mt-3 mb-5 shadow" >
                    <div className="card-header" >
                    <div className="row ml-3">
                    <img src={Logo} width="50" height="50"/>
                    <h2 className="text-success ml-3 my-auto">Signup</h2>
                    </div> 
                    <div className="card-body">
                    <form>
                    <div className="form-group ">
                      <input className="form-control shadow-sm" style={{ borderRadius: 5, backgroundColor: "#f0f0f0", fontSize: 14}} id="firstname" 
                            type="text" placeholder="First Name" onChange={handleChange("firstname")}
                            value={firstname}/>
                    </div>
                    <div className="form-group ">
                      <input className="form-control shadow-sm" style={{ borderRadius: 5, backgroundColor: "#f0f0f0", fontSize: 14}} id="lastname" 
                            type="text" placeholder="Last Name" onChange={handleChange("lastname")}
                            value={lastname}/>
                    </div>
                  
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 5, backgroundColor: "#f0f0f0", fontSize: 14}} id="email" 
                            type="email" placeholder="Email" onChange={handleChange("email")}
                            value={email}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 5, backgroundColor: "#f0f0f0", fontSize: 14}} id="phone" 
                            type="number" placeholder="Phone No." onChange={handleChange("phone")}
                            value={phone}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 5, backgroundColor: "#f0f0f0", fontSize: 14}} id="password" 
                            type="password" placeholder="Password" onChange={handleChange("password")}
                            value={password}/>
                    </div>
                    <div className="form-group">
                        <h6 className="text-success">Upload Image</h6> 
                        <input onChange={handleChange("photo")} type="file" name="photo" accept="image" />
                    </div>
                    {successMessage()}
                    <div className="text-right">
                      <button type="submit" style={{ borderRadius: 10}} className="btn btn-primary shadow"
                              onClick={onSubmit}> Signup </button>
                    </div>
                  </form>
                    </div> 
                    <div class="card-footer">
                        <h6 class="text-warning "> Goto Home Page</h6>
                        <h6 className="text-muted text-left">Already Signed up ? <a href="/signin">Signin</a></h6>                   
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
                            <article style={{color: "#B2EBF2", fontsize: "18px", fontfamily:'Segoe UI'}}>Focus is an online learning platform where you can prepare yourself for your desired Govenment Jobs.</article>
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
        {SignupForm()}
       </div>
    )
}

export default Signup;
