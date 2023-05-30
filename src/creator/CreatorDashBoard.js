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
import Logo from "../assets/images/logo.png";
import Permissions from "../masterauth/helper/permissions";
import {isAuthenticated} from "../masterauth/helper/index";
import {Grid, ButtonBase, Button} from "@material-ui/core";
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import Chip from '@material-ui/core/Chip';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import profile from "../assets/images/student.png";
import {getUser} from "../admin/helper/adminapicall";
import {Link} from "react-router-dom";
import Popover from '@material-ui/core/Popover';
import SettingsIcon from '@material-ui/icons/Settings';
import Permission from "../masterauth/helper/UserPermissonSignout";
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
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    role: "",
    error: "",
})

const {firstname, lastname, email, phone, role} = myuser;

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
              role: data.role
          })
      }
  });
}

const [courses, setCourses] = useState([]);

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
          <a href="/manage/writter/courses" style={{textDecoration: 'none'}}>  
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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar style={{backgroundColor: '#006064', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}} position="fixed" className={classes.appBar}>
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
            <h5 class="mt-3 ml-3 font-weight-bolder">Writter Dashboard</h5>
            </Typography>
         
          </div>

          <Popover className="mt-2" open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left'}}>
            <div className="shadow-sm" style={{width: 320, height: 290}}>
                <center>
                    <p className="pt-3 font-weight-bold" style={{fontSize: 30, color: "#e040fb"}} >{firstname} {lastname}</p>
                    <Chip style={{backgroundColor: "#fafafa", fontSize: 15, color: "#2196f3"}} className="shadow" label={email}/>
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
      <Grid container spacing="4">
        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#e3f2fd"}} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                &nbsp;&nbsp;<Chip style={{backgroundColor: "#2196f3", fontSize: 18}} className="shadow text-white" label="Management Roles"/>
                </Typography>
                <IconButton color="secondary"> 
                  <ImportContactsRoundedIcon/><h6 className="my-auto ">&nbsp;Chapters:</h6>
                </IconButton><br/>
                <div  className="row pl-3">
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Add Chapters"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Write Introduction"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Update Chapters"/>
                </div>
                <IconButton color="secondary"> 
                  <SpellcheckIcon/><h6 className="my-auto ">&nbsp;MCQ's:</h6>
                </IconButton><br/>
                <div  className="row pl-3">
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Create MCQ's"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Update MCQ's"/>
                </div>
                
            </CardContent>
            </Card>
        </Grid>

        <Divider/>

        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#f3e5f5"}}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    &nbsp;&nbsp;<Chip style={{backgroundColor: "#f50057", fontSize: 18}} className="shadow text-white" label="Writter Guide"/>
                  </Typography>&nbsp;&nbsp;
                <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 15, backgroundColor: "#ffffff"}}>
                &nbsp; &nbsp;&nbsp;
                  <h6 className="p-3 pb-2" style={{fontSize: 15, color: "#9c27b0"}}>The Writters are the users who are able to 
                  create and update chapters of any subjects.<br/> Inside the chapters Writters will be able to create Multiple choice
                  questions. <br/>They can update the questions but cannot delete once created. <br/>Inorder to delete any items, please contact 
                  the Admin.
                  &nbsp;&nbsp;
                  </h6>
                </Card>
              </CardContent>
            </Card>
        </Grid>  
    </Grid>
    &nbsp;&nbsp;
    <Divider/>
    &nbsp;&nbsp;
   
    </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
