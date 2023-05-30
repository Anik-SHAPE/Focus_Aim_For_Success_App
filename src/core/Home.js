import React from 'react';
import Logo from "../assets/images/logo1.png";
import Image from "../assets/images/home.png";
import course1 from "../assets/images/wbcs.jpg";
import course2 from "../assets/images/psc.jpg";
import course3 from "../assets/images/rail.jpg";
import course4 from "../assets/images/misc.jpg";
import course5 from "../assets/images/tet.jpg";
import course6 from "../assets/images/police.jpg";
import course7 from "../assets/images/wbssc.jpg";
import course8 from "../assets/images/group-d.jpg";
import Contact from "../assets/images/contact.png";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {Link} from "react-router-dom"; 
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Chip from '@material-ui/core/Chip';
import EmailIcon from '@material-ui/icons/Email';
import Divider from '@material-ui/core/Divider';
import CallIcon from '@material-ui/icons/Call';
import { isAuthenticated } from '../masterauth/helper';

const Home = () => {

  const{user, token} = isAuthenticated();

  return(
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light p-3 mb-3 bg-white shadow-sm" id="navbar-controll">
        <div className="container">
        <a className="navbar-brand" href="#"><img src={Logo} height="80" width="80" className="d-inline-block align-top" alt="" loading="lazy"/></a>
        <Link to={"/user/dashboard/courses"} style={{textDecoration: "none"}}><button className="nav-link ml-2 shadow btn btn-outline-primary" style={{borderRadius: 20}}>Signin</button></Link>
        </div>
      </nav>
      &nbsp;&nbsp;
      <div className="container pl-3 pr-3">
        <div className="row">

          <div className="col-sm pt-4">
            <section class="d-block w-100 h-100 pb-4">
              <p style={{fontSize: 42, fontWeight: 600, fontFamily: "American Typewriter, serif", color: "#00796b"}}>Education is the Menifestation of the Perfection already in Men</p>
              <h6 className="pb-3">- Swami Vivekananda</h6>
              <div className="mt-3">
              <Link to={"/courses"} style={{textDecoration: "none"}}>
              <button className="nav-link shadow btn btn-outline-success" style={{borderRadius: 20}}>Start Learning &nbsp; <ArrowForwardIcon/></button>
              </Link>
              </div>
              &nbsp;
             
            </section>
          </div>
          <div className="col-sm pt-3">
            <section className="d-block w-100 h-100">
              <img className="d-block w-100 h-100 pb-2" src={Image}/>
            </section>
          </div>
        </div>

        <div className="row">
          <section className="d-block w-100 h-100 pl-3 pb-1 pt-5">
            <p style={{color: "#3f51b5", fontSize: 40, fontWeight: 600, fontFamily: "American Typewriter, serif"}}>About Us</p>
          </section>
        </div>

        <div className="col p-1">
         <p style={{color: "#3e2723", fontSize: 19}}>Focus is an online learning platform, where you can prepare yourself for your desired Government Jobs. Our
            course curriculum is designed in such a way that you will be guided in a sequence manner through out the whole course, with ease. We are providing varity of courses on Government exams, named as W.B.C.S, P.S.C, RAIL, MISC, 
            POLICE, GROUP-D and W.B.S.S.C. In the courses we have included the top selected MCQ's with solution on 
            every subjects of it. Explore the courses and rank your skill higher with us.
          </p>
        </div>

        <div className="row">
          <section className="d-block w-100 h-100 pb-4 pt-5">
          <center> <p style={{color: "#00bfa5", fontSize: 35, fontWeight: 600, fontFamily: "American Typewriter, serif"}}>Course Curriculum</p></center>
          </section>
        </div>

        <div className="row pb-3">
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15}}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course1}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course2}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course3}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course4}/></a>
            </div>
          </div>
        </div>
        <Divider/>
        <div className="row pt-3 pb-3">
        <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course5}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course6}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course7}/></a>
            </div>
          </div>
          <div className="col-sm ">
            <div className="card shadow m-2" style={{backgroundColor:"#EAF0F1", borderRadius: 15 }}>
            <a href="/courses" style={{textDecoration: "none"}}><img className="pl-2 pb-2 d-block w-100 h-100"  src={course8}/></a>
            </div>
          </div>
        </div>
        <Divider/>
        <div className="col pt-4">
      
          <p style={{color: "#3e2723", fontSize: 14}} className="mt-2">
          <b style={{fontFamily: "Cooper Black", color: "#00897b", fontSize: 16}}>FOCUS</b><b style={{color: "#00897b", fontSize: 14}}> - Aim For Success এর ভূমিকা </b> <br/><br/>

              <b>1.</b> FOCUS এর  ওয়েবসাইট অথবা মোবাইল এপ্লিকেশন থেকে বিভিন্ন সরকারি চাকরির পরীক্ষার সমস্ত বিষয়ের উপর বিস্তারিত জ্ঞান লাভ। <br/>
              <b>2.</b> চ্যাপ্টার টি আরো ভালো ভাবে বোঝার জন্য ভিডিও ক্লাস। <br/>
              <b>3.</b> ওই বিষয়ের প্রতি চ্যাপ্টারে এর প্রশ্ন ও উত্তর, ফোকাস এর  ওয়েবসাইট অথবা মোবাইল এপ্লিকেশন থেকে করে নেওয়া। <br/>
              <b>4.</b> অবশেষে প্রতিটি চ্যাপ্টার থেকে কমপক্ষে ৫ টি Test ও তার Solution । <br/>
              <b>5.</b> প্রতি মাসে একটি Mega Exam এবং Merit list দেখে নিজের অবস্থান জেনে নেওয়া। <br/>
              <b>6.</b> মূল পরীক্ষার আগে ৫ টি Full Length Mock Test। <br/>
              <b>7.</b> লিখিত পরীক্ষায় সফল ছাত্র-ছাত্রীদের Interview Class এবং অভিজ্ঞ ব্যক্তিদের দ্বারা পরিচালিত বোর্ডের সামনে বসে একটি Mock Interview।<br/>
              
              <br/><b style={{fontFamily: "Cooper Black"}}>FOCUS</b><b> - Aim For Success এর পক্ষ থেকে সকল উচ্চাকাঙ্ক্ষী ছাত্র-ছাত্রীদের ভবিষ্যত সফলতার শুভকামনা রইলো।</b>
         </p>
          <Link to={"/courses"} style={{textDecoration: "none"}}>
              <button className="nav-link shadow btn btn-outline-warning" style={{borderRadius: 20}}>Explore &nbsp; <ArrowForwardIcon/></button>
          </Link>
        </div>

        <div className="row">
          
          <div className="col-sm pt-4">
            <section className="d-block w-100 h-100">
              <img className="d-block w-100 h-100 pb-2" src={Contact}/>
            </section>
          </div>

          <div className="col-sm pt-5">
            <section className="d-block w-100 h-100">
              <p style={{fontSize: 40}} className="font-weight-bold">Do you have any query?</p>
              <Chip style={{backgroundColor: "#ffffff", fontSize: 15}} icon={<CallIcon style={{color: "#64dd17"}}/>} className="shadow m-2" label="Phone No."/>
              <a href="tel:+919153402828" style={{textDecoration: "none"}}><p className="pl-2 pt-2"  style={{fontSize: 18}}>+91 9153402828</p></a>
              <a href="tel:+919641539738" style={{textDecoration: "none"}}><p className="pl-2 "  style={{fontSize: 18}}>+91 9641539738</p></a>
              <Chip className="pt-3" style={{backgroundColor: "#ffffff", fontSize: 15}} icon={<EmailIcon style={{color: "#f50057"}}/>} className="shadow m-2" label="Email us"/>
              <a href="mailto:focus.m4.success@gmail.com" style={{textDecoration: "none"}}><p className="pl-2 pt-2"  style={{fontSize: 20}}>focus.m4.success@gmail.com</p></a>
              <div className="row pt-2">
              <a className="text-decoration-none pl-3" href="https://www.facebook.com/focus.m4.success/" target="_blank"><ion-icon name="logo-facebook"  style={{color: "#01579b", fontSize: 30}}></ion-icon>&nbsp;</a>
              <a className="text-decoration-none pl-1" href="https://www.instagram.com/focus.m4.success/" target="_blank"><ion-icon name="logo-instagram" style={{color: "#f50057", fontSize: 30}}></ion-icon>&nbsp;</a>
              <a className="text-decoration-none pl-1" href="#" target="_blank"><ion-icon name="logo-twitter"  style={{color: "#1e88e5", fontSize: 30}}></ion-icon>&nbsp;</a>
              <a className="text-decoration-none pl-1" href="#" target="_blank"><ion-icon name="logo-linkedin"  style={{color: "#0d47a1", fontSize: 30}}></ion-icon>&nbsp;</a>
              <a className="text-decoration-none pl-1" href="https://www.youtube.com/channel/UCqKyqZkMS0qR-NX1m2TpYLA?view_as=subscriber" target="_blank"><ion-icon name="logo-youtube"  style={{color: "#d50000", fontSize: 30}}></ion-icon>&nbsp;</a>
              </div>
            </section>
          </div>
        </div>
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
                <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Job Preparations</a><br/>
                <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Video Classes</a><br/>
                <a href="#" className="text-decoration-none" style={{color: "#EAF0F1", fontsize: "18px", fontfamily:'Segoe UI'}}>Mock Test</a><br/>
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

export default Home;

