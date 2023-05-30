import React, {useState, useEffect} from 'react';
import Logo from "../assets/images/logo1.png";
import Card from '@material-ui/core/Card';
import ImageFetcher from "../core/helper/ImageHelper";
import {Grid, ButtonBase, CardMedia, Button, Divider} from "@material-ui/core";
import {Link} from "react-router-dom";
import {getAllCourse} from "../admin/helper/adminapicall";
import Chip from '@material-ui/core/Chip';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const Course = () => {

    const [courses, setCourses] = useState([]);

    const preload = () => {
        getAllCourse().then(data => {
          if (data.error) {
            console.log(data.error);
          } else {
            setCourses(data);
          }
        });
    };

    useEffect(() => {
        preload();
    }, []);

    

    
    return(
        <div>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light p-3 mb-4 bg-white shadow-sm" id="navbar-controll">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={Logo} height="60" width="60" className="d-inline-block align-top" alt="" loading="lazy"/></a>
            <Link to={"/user/dashboard/courses"} style={{textDecoration: "none"}}><button className="nav-link ml-2 shadow btn btn-outline-primary" style={{borderRadius: 20}}>Signin</button></Link>
            </div>
        </nav>
        <div className="container">
          <Card className="p-2 mb-3 shadow" style={{borderRadius: 20, width: 150, backgroundColor: "#ffffff"}}>
            <center><p className="my-auto" style={{fontSize: 25, color: "#00c853", fontWeight: "bold"}}>Courses</p></center>
          </Card>
          <Divider/>
        </div>
        &nbsp;
        <div className="container">
            <div className="row">
            {courses.map((course, index) => { 
              return (
                <div key={index} className="col-6 col-md-2 mb-3" > 
                    <Card  className="shadow-lg" style={{ backgroundColor: "#01579b", borderRadius: 15}}>
                        <Link to={`/courses/${course._id}/subject`}  style={{textDecoration: "none"}}><ImageFetcher  course={course}/>
                            <center>
                                <b><h5 className="pt-1" style={{color: "#ffffff"}}>{course.name}</h5></b>
                            </center>
                        </Link>
                        {/* <a href={course.buylink} style={{textDecoration: "none"}}><button className="nav-link shadow btn btn-success" style={{width:"100%"}}>Buy at ₹ {course.amount}</button></a> */}
                    </Card>   
                </div>
              )  
             })}
            </div>
        </div>
    </div>
    )
}

export default Course;