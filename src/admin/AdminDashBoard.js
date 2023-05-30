import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { yellow, pink, green, grey } from '@material-ui/core/colors';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import InfoCard from "./Card";
import Logo from "../assets/images/logo.png";
import Permissions from "../masterauth/helper/permissions";
import UsersInfo from "./UsersInfo";
import ManageUsers from "./ManageUsers";
import ManageCreator from "./ManageCreator";
import ManageFrenchaisee from "./ManageFrenchaisee";
import Courses from "./CreateCourses";
import {isAuthenticated} from "../masterauth/helper/index";
import { createUser, updateUser } from './helper/adminapicall';
import {Grid, ButtonBase, Button} from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import profile from "../assets/images/student.png";
import {getUser} from "../admin/helper/adminapicall";
import {Link} from "react-router-dom";
import Popover from '@material-ui/core/Popover';
import SettingsIcon from '@material-ui/icons/Settings';
import Permission from "../masterauth/helper/UserPermissonSignout";
import Chip from '@material-ui/core/Chip';
import { confirmAlert } from 'react-confirm-alert';
import {API} from '../backend';

// import Subjects from "./ManageSubjects";
const drawerWidth = 240;

const toolbarStyle = {
  minHeight: '80px',
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
     setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const [myuser, setUser] = useState({
    fname: "",
    lname: "",
    myemail: "",
    myphone: "",
    myrole: "",
    myerror: "",
})

const {fname, lname, myemail, myphone, myrole, myerror} = myuser;

const {user,token} = isAuthenticated();

const userload = (userId, token) => {
  getUser(userId, token).then(data => {
      if(data.error){
          setUser({...myuser, myerror: data.error});
      }else{
          setUser({
              ...myuser,
              fname: data.firstname,
              lname: data.lastname,
              myemail: data.email,
              myphone: data.phone,
              myrole: data.role
          })
      }
  });
}

useEffect(() => {
  userload(user._id, token);
}, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = ( 
    <div >
      <div className={classes.toolbar}  />
     <center><img class="pb-5" src={Logo} width="140" height="190"/></center>
      &nbsp; 
      <Divider />
      &nbsp; &nbsp; 
      <list>
        <ul class="navbar-nav">

        <li class="nav-item">
          <a href="/manage/users" style={{textDecoration: 'none'}}>
            <ListItem Button>
              <ListItemIcon>
                  <GroupRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Users"/>
            </ListItem>
          </a>
        </li>

        <li class="nav-item active">
          <a href="/manage/writter" style={{textDecoration: 'none'}}>
            <ListItem Button >
              <ListItemIcon>
                  <BorderColorRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}} primary="Writter"/>
            </ListItem>
          </a>
        </li>
          
        <li class="nav-item">
          <a href="/manage/frenchaisee" style={{textDecoration: 'none'}}>
            <ListItem Button>
              <ListItemIcon>
                  <LinkRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Franchaisee"/>
            </ListItem>
          </a>
        </li>
        <li class="nav-item">
          <a href="/manage/course" style={{textDecoration: 'none'}}>  
            <ListItem Button>
              <ListItemIcon>
                  <ImportContactsRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Courses"/>
            </ListItem>
          </a>
        </li>
        </ul>
      </list>
      &nbsp;
      <Divider />
      &nbsp; &nbsp;
      <list>
        <a href="https://mail.google.com/mail/" style={{textDecoration: 'none'}}>
          <ListItem Button>
              <ListItemIcon>
                  <PermContactCalendarRoundedIcon style={{color: green[500]}}/>
              </ListItemIcon>
              <ListItemText primary="Contact Us"/>
          </ListItem>
        </a>
      </list>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  // Create Admin
  const [values, setValues] = useState({
    role: 1,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    error: "",
    publish: false,
    loading: false,
    success: false,
  });

  const {firstname, lastname, email, phone, password, role, error, publish, loading, success} = values;

  const handleChange = name => event => {
    setValues({...values, error: false, [name]: event.target.value});
  }

  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true })

    // request to backend
    createUser(user._id, token, {firstname, lastname, email, phone, password, role})
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error, success: false})
      }else{
        setValues({
          ...values,
          role: 1,
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
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
            <div className="alert alert-success"  style={{ borderRadius: 30}}>
              <center> <h4 className="text-success my-auto">Admin Account Created Succesfully</h4> </center>
            </div>
          </div>
        </div>  
      )
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#0C090A', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} position="fixed" className={classes.appBar}>
        <Toolbar style={toolbarStyle}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <div className="row">

            <Card className="shadow" style={{ borderRadius: 100, backgroundColor: "#f0f0f0",width: 45, height: 45}} onClick={handleClick} >
              <img className="d-block w-100 h-100 img-fluid" src={`${API}/user-profile/photo/${user._id}`} alt="profile"/>
            </Card>
            <Typography variant="h6" noWrap >
            <h5 class="mt-3 ml-3 font-weight-bolder">Admin Dashboard</h5>
            </Typography>
         
          </div>

          <Popover className="mt-2" open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left'}}>
            <div className="shadow-sm" style={{width: 320, height: 290}}>
                <center>
                    <p className="pt-3 font-weight-bold" style={{fontSize: 30, color: "#e040fb"}} >{fname} {lname}</p>
                    <Chip style={{backgroundColor: "#fafafa", fontSize: 15, color: "#2196f3"}} className="shadow" label={myemail}/>
                </center>
                &nbsp; 
                
                <center>
                  <button onClick={() => {
                      confirmAlert({
                        title: 'Account Management on Progress', 
                        buttons: [
                          {
                            label: 'Close',
                            onClick:  () => {}
                          }
                  
                        ]
                      });
                    }}
                    className="nav-link shadow-sm btn btn-outline-warning" style={{borderRadius: 15}}>
                    <SettingsIcon/> &nbsp;  Manage Your Focus Account  
                  </button>
                   
                </center>
                &nbsp;
                <Divider/>
                &nbsp; 
                <center>
                <Link to={"/manage/console/signin"} style={{textDecoration: "none"}}>
                <button className="nav-link shadow btn btn-danger my-auto" style={{borderRadius: 20}}> <Permission/> </button>
                </Link></center>
            </div>
        </Popover>

        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        &nbsp; &nbsp;
        <InfoCard/>
        &nbsp; &nbsp;<Divider/>
        <div>&nbsp; &nbsp;
          <UsersInfo/>&nbsp; &nbsp;<Divider/>
        </div>
        {successMessage()}
        &nbsp; &nbsp;
        <Grid container spacing="4">

          <Grid item xs={12} sm={12} md={12} >
              <Card className={classes.root} className={classes.card} className="shadow-lg" style={{ borderRadius: 15, backgroundColor: "#ffffff"}} >
              <Grid item xs={12} sm={12} md={12} >
              <CardContent>
                  <Typography variant="h5">
                  <h5  style={{color: "#00b8d4"}} className=" font-weight-bold pb-2 pt-1">Create Admin</h5>
                  </Typography>
                  <Typography variant="body2" component="p">
                  <form >
                    
                    <div className="form-group ">
                      <input className="form-control shadow-sm" style={{ borderRadius: 10, backgroundColor: "#f0f0f0", fontSize: 14}} id="firstname" 
                            type="text" placeholder="First Name" onChange={handleChange("firstname")}
                            value={firstname}/>
                    </div>
                    <div className="form-group ">
                      <input className="form-control shadow-sm" style={{ borderRadius: 10, backgroundColor: "#f0f0f0", fontSize: 14}} id="lastname" 
                            type="text" placeholder="Last Name" onChange={handleChange("lastname")}
                            value={lastname}/>
                    </div>
                  
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 10, backgroundColor: "#f0f0f0", fontSize: 14}} id="email" 
                            type="email" placeholder="Email" onChange={handleChange("email")}
                            value={email}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 10, backgroundColor: "#f0f0f0", fontSize: 14}} id="phone" 
                            type="number" placeholder="Phone No." onChange={handleChange("phone")}
                            value={phone}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control shadow-sm" style={{ borderRadius: 10, backgroundColor: "#f0f0f0", fontSize: 14}} id="password" 
                            type="password" placeholder="Password" onChange={handleChange("password")}
                            value={password}/>
                    </div>
                    <div className="text-right">
                      <button type="submit" style={{ borderRadius: 15}} className="btn btn-primary shadow"
                        onClick={onSubmit}> Create </button>
                    </div>
                  </form>
                  </Typography>
              </CardContent>
              </Grid>
              
            </Card>
          </Grid>
          </Grid>
         
     </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
