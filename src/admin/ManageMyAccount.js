import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {isAuthenticated, SignUp} from "../masterauth/helper/index";
import {getUser, updateUser} from "./helper/adminapicall";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minWidth: 200,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const ManageAccount = () => {

  const classes = useStyles();

  const [User, setUser] = useState({
     firstname: "",
     lastname: "",
     email: "",
     phone: "",
     role: "",
     password: "",
     error: "",
     loading: false,
     success: false
  });

  const {firstname, lastname, email, phone, password, role,  error, loading, success} = User;

  const {user, token} = isAuthenticated();

  const userload = (userId, token) => {
    getUser(userId, token).then(data => {
        if(data.error){
            setUser({...User, myerror: data.error});
        }else{
            setUser({
                ...User,
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                phone: data.phone,
            })
        }
    });
  }

  const onSubmit = () => {
    setUser({...User, error:"", loading: true});
    updateUser(user._id, token, {password})
    .then(data => {
        if(data.error){
            setUser({ ...User, error: data.error });
        }else{
            setUser({
                ...User,
                password: "",
                loading: false,
                success: true
            });
        }
    })
  };

  const handleChange = name => event => {
    setUser({ ...User, error: false, [name]: event.target.value});
  };

  const successMessage = () => {
    if (success) {
      return (
        <div className="row pt-3 pb-3" >
          <div className="col-md-6 offset-sm-3 text-left">
            <div className="alert alert-success"  style={{ borderRadius: 30}}>
              <center> <h4 className="text-success my-auto">Password Updated Succesfully</h4>  
              <h6 className=" pt-1 my-auto">Please<a href="/manage/console/signin" style={{textDecoration: "none"}}>login</a> again to access all the courses</h6>
               </center>
            </div>
          </div>
        </div>  
      )
    }
  };

  useEffect(() => {
    userload(user._id, token);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar style={{backgroundColor: '#4a148c', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} position="static">
        <Toolbar variant="dense">
            <h4 className="p-4">Account Management</h4>
        </Toolbar>
      </AppBar>
      <Grid className="p-5" container spacing="4">
        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#e3f2fd"}} >
                <CardContent>
                    <h4 className="pl-3 pt-2" style={{color: "#00c853"}}><b>My Info.</b></h4>
                    <h6 className="pl-3 pt-3"><b style={{color: "#01579b"}}>Name:</b> &nbsp; {firstname} {lastname}</h6>
                    <h6 className="pl-3"> <b style={{color: "#01579b"}}>Email:</b>  &nbsp; {email}</h6>
                    <h6 className="pl-3"> <b style={{color: "#01579b"}}>Phone:</b>  &nbsp; {phone}</h6>
                    {/* <center><h4 className="pt-4" style={{color: "#f50057"}}>Update Your Details</h4></center>
                    <h6 className="pt-2 pl-3">Name:</h6>
                    <h6 className="pt-2 pl-3">Gender:</h6>
                    <h6 className="pt-2 pl-3">DOB:</h6>
                    <h6 className="pt-2 pl-3">Father's Name:</h6>
                    <h6 className="pt-2 pl-3">Address:</h6> */}
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#ede7f6"}} >
                <CardContent>
                    <h4  className=" pt-2" style={{color: "#ff5722"}}>Change Password</h4>
                    <TextField id="standard-basic" onChange={handleChange("password")} value={password} type="password" label="New Password" />
                    &nbsp;
                    <center><button className="nav-link shadow btn btn-outline-success" onClick={onSubmit} style={{borderRadius: 20}}>Update</button></center>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
      &nbsp; &nbsp;
      {successMessage()}
    </div>
  );
}

export default ManageAccount;
