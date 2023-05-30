import React, {useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import PropsType from "prop-types";
import axios from "axios/index";
import Logo from "../assets/images/logo.png";
import Card from '@material-ui/core/Card';
import ImageFetcher from "../core/helper/ImageHelper";
import {Grid, ButtonBase, CardMedia, Divider, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";
import {getAllCourse, getUser, getPaymentDetails, addMyCourse, updateChapter} from "../admin/helper/adminapicall";
import Permission from "../masterauth/helper/UserPermissonSignout";
import Chip from '@material-ui/core/Chip';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import { isAuthenticated, updateUser } from '../masterauth/helper';
import Popover from '@material-ui/core/Popover';
import profile from "../assets/images/student.png";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import ReplyIcon from '@material-ui/icons/Reply';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { confirmAlert } from 'react-confirm-alert';
import {API} from '../backend';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
    root: {
        margin: 0,
        padding: theme.spacing(2),
      },
      closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
      },
}));

const DialogTitle = withStyles()((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <div className="row" style={{justifyContent: "space-between"}}>
                <p className="my-auto pl-2" style={{fontSize: 20, fontWeight: "bold"}}>My Info</p>
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                  <CloseIcon />
                </IconButton>
            </div>
          
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);


const Course = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [opens, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClickClose = () => {
    setOpen(false);
    };

    const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
       setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const [myuser, setUser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        photo: "",
        role: "",
        error: "",
        success: false,
        loading: false,
    })

    const {firstname, lastname, email, phone, photo, role, error, success, loading} = myuser;
    const {user,token} = isAuthenticated();

    const userload = (userId, token) => {
        getUser(userId, token).then(data => {
            if(data.error){
                setUser({...myuser, error: data.error});
            }else{
                setUser({
                    ...myuser,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    phone: data.phone,
                    photo: data.photo,
                    role: data.role
                })
            }
        });
    }

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

    const onSubmit = event => {
        event.preventDefault();
        setUser({...myuser, error:"", loading: true});

        //Backend Request
        updateUser(user._id, token, {firstname, lastname, phone, photo})
        .then(data => {
            if(data.error){
                setUser({...myuser, error: data.error})
            }else{
                setUser({
                    ...myuser,
                    firstname: "",
                    lastname: "",
                    phone: "",
                    photo: "",
                    loading: false,
                    success: true
                })
            }
        })
    }

    const handleChange = name => event => {
        setUser({ ...myuser, error: false, [name]: event.target.value});
    };

    const successMessage = () => {
        if (success) {
          return (
            <div className="row pt-3 pb-3" >
              <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success shadow"  style={{ borderRadius: 30}}>
                  <center> <h4 className="text-success my-auto">Your Profile is Updated Succesfully</h4></center>
                </div>
              </div>
            </div>  
          )
        }
    };

    useEffect(() => {
        userload(user._id, token);
        preload();
    }, []);
    

    const onTrialAdd = courseId => {
        addMyCourse(user._id, token, courseId).then(res => {
            if(res.error){
                console.log(res.error);
            }else{
                console.log( 'resp', res );
                window.location.href = res;
            }
        })
    }

    return(
        <div>
          <nav className="navbar sticky-top navbar-expand-lg navbar-light p-3 shadow" id="navbar-controll" style={{backgroundColor: "#0A3D62"}} >
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={Logo} height="60" width="60" className="d-inline-block align-top" alt="" loading="lazy"/></a>
                <Card className="shadow" style={{ borderRadius: 100, backgroundColor: "#f0f0f0",width: 45, height: 45}} onClick={handleClick} >
                
                  <img className="d-block w-100 h-100 img-fluid" src={`${API}/user-profile/photo/${user._id}`} alt="profile"/>

                </Card>
            </div>
        </nav>


        <Popover className="mt-3" open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right'}}>
            <div className="shadow-sm" style={{width: 320, height: 290}}>
                <center>
                    <p className="pt-3 font-weight-bold" style={{fontSize: 30, color: "#e040fb"}} >{firstname} {lastname}</p>
                    <Chip style={{backgroundColor: "#fafafa", fontSize: 15, color: "#2196f3"}} className="shadow" label={email}/>
                </center>
                &nbsp; 
                
                <center>
                
                    <button className="nav-link shadow-sm btn btn-outline-warning" style={{borderRadius: 15}} onClick={handleClickOpen}>
                      <SettingsIcon/> &nbsp;  Manage Your Focus Account  
                    </button>



                    <Dialog onClose={handleClickClose} aria-labelledby="customized-dialog-title" open={opens}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClickClose}/>
                        <DialogContent dividers>
                        <Typography gutterBottom>
                        <TextField className="mb-2" style={{width:"100%"}} onChange={handleChange("firstname")} value={firstname} id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField className="mb-2" style={{width:"100%"}} onChange={handleChange("lastname")} value={lastname} id="outlined-basic" label="Last Name" variant="outlined" />
                        <TextField className="mb-2" style={{width:"100%"}} onChange={handleChange("phone")} value={phone} id="outlined-basic" label="Phone" variant="outlined" />
                        </Typography>
                      
                        </DialogContent>
{/*                
                        <div className="p-3">
                            {successMessage()}
                        </div>
                        <Button onClick={onSubmit} style={{border: "none"}}>
                            <Card className="m-2 pt-1" style={{backgroundColor: "#039be5", width: "100%", borderRadius: 15}}>
                                <center><p className="my-auto" style={{fontSize: 18, color: "#ffffff"}} >Save</p></center>
                            </Card>
                        </Button> */}
               
                    </Dialog>
               
                    

                </center>
                &nbsp;
                <Divider/>
                &nbsp; 
                <center>
                <Link to={"/"} style={{textDecoration: "none"}}>
                <button className="nav-link shadow btn btn-danger my-auto" style={{borderRadius: 20}}> <Permission/> </button>
                </Link></center>
            </div>
        </Popover>

            
      

        <div className="mb-4 pt-3 pl-4 shadow ml-1 mr-1 row" style={{backgroundColor: "#ffffff", borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: "space-between"}}>
      
            <p className="pl-2" style={{color: "#00000", fontSize: 20}}>Hello {firstname},
            <p style={{color: "#039be5", fontSize: 25}}>Welcome to Focus</p></p>
      
            <div className="hideonmobile">
              <div class="container mt-2 mr-2">
                <a class="text-decoration-none" href="https://www.facebook.com/focus.m4.success/" target="_blank"><ion-icon name="logo-facebook" id="fb-logo" style={{width: 40, height: 40}}></ion-icon></a>
                <a class="text-decoration-none pl-3" href="https://www.instagram.com/focus.m4.success/" target="_blank"><ion-icon name="logo-instagram" id="insta-logo"style={{width: 40, height: 40, color: "#f50057"}}></ion-icon></a>
                <a class="text-decoration-none pl-3" href="https://www.youtube.com/channel/UCqKyqZkMS0qR-NX1m2TpYLA?view_as=subscriber" target="_blank"><ion-icon name="logo-youtube" id="youtube-logo" style={{width: 40, height: 40, color: "#d50000"}}></ion-icon></a>
              </div>  
            </div>
          

        </div>

        <div className="row hidedesktop">
          <div class="container">
            <a class="text-decoration-none pl-4" href="https://www.facebook.com/focus.m4.success/" target="_blank"><ion-icon name="logo-facebook" id="fb-logo" style={{width: 40, height: 40}}></ion-icon></a>
            <a class="text-decoration-none pl-3" href="https://www.instagram.com/focus.m4.success/" target="_blank"><ion-icon name="logo-instagram" id="insta-logo"style={{width: 40, height: 40, color: "#f50057"}}></ion-icon></a>
            <a class="text-decoration-none pl-3" href="https://www.youtube.com/channel/UCqKyqZkMS0qR-NX1m2TpYLA?view_as=subscriber" target="_blank"><ion-icon name="logo-youtube" id="youtube-logo" style={{width: 40, height: 40, color: "#d50000"}}></ion-icon></a>
          </div>  
        </div>

        &nbsp;
        
        <div className="container pr-4 pl-4">
            <div className="row">
            {courses.map((course, index) => { 
               
                return (
                    <div key={index} className="col-6 col-md-2 pb-1 mb-3" > 
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