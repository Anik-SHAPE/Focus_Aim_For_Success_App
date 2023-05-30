import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
import {Grid, ButtonBase} from "@material-ui/core";
import { yellow, pink, green, grey, purple } from '@material-ui/core/colors';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import InfoCard from "./Card";
import Logo from "../assets/images/logo.png";
import Permissions from "../masterauth/helper/permissions";
import {isAuthenticated} from "../masterauth/helper/index";
import HomeIcon from '@material-ui/icons/Home';
import TextField from '@material-ui/core/TextField';
import Courses from "./CreateCourses";
import { createUser, getAllContentWriter, delUser } from './helper/adminapicall';
import { confirmAlert } from 'react-confirm-alert';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = ( 
    <div>
      <div className={classes.toolbar} />
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
                <ListItemText style={{color: purple[800]}} primary="Writter"/>
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
          <a href="/manage/console/admin" style={{textDecoration: 'none'}}>  
            <ListItem Button>
              <ListItemIcon>
                  <HomeIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Home"/>
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
        <a href="/manage/console/signin">
          <ListItem Button>
              <ListItemIcon>
                  <LaunchRoundedIcon style={{color: grey[500]}}/>
              </ListItemIcon>
                <Permissions/>
          </ListItem>
        </a>
      </list>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  //Get All Writter
  const [getUsers, setgetUsers] = useState([]);

  const preload = (userId, token) => {
    getAllContentWriter(userId, token).then(data => {
        if(data.error){
          console.log(data.error);
        }else{
            setgetUsers(data);
        }
    });
  };

  useEffect(() => {
    preload(user._id, token);
  }, []);

  //Delete a writter
  const deleteUser = trigeruserId => {
    delUser(user._id, token,trigeruserId).then(data => {
        if(data.error){
            console.log(data.error);
        }else{
            preload();
            document.location.reload(true);
        }
    });
  };

  // Create Writter
  const [values, setValues] = useState({
    role: 0,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    photo: "",
    password: "",
    error: "",
    publish: false,
    loading: false,
    success: false,
    formData: new FormData()
  });

  const {firstname, lastname, email, phone, photo, password, role, error, publish, loading, success, formData} = values;
  const {user, token} = isAuthenticated();

  const handleChange = name => event => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({...values, error: false, [name]: event.target.value});
  }


  const onSubmit = event => {
    event.preventDefault();
    setValues({...values, error: false, loading: true })

    // request to backend
    createUser(formData)
    .then(data => {
      if(data.error){
        setValues({...values, error: data.error, success: false})
      }else{
        setValues({
          ...values,
          role: 0,
          firstname: "",
          lastname: "",
          email: "",
          photo: "",
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
            <div className="alert alert-success shadow"  style={{ borderRadius: 30}}>
              <center> <h4 className="text-success my-auto">Writter Account Created Succesfully</h4> </center>
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
          <Typography variant="h6" noWrap >
           <h5 class="my-auto font-weight-bolder">Writter Management</h5>
          </Typography>
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
        <div>
        &nbsp; &nbsp;
            <Grid container spacing="4">

              <Grid item xs={12} sm={12} md={12} >
              <Card className={classes.root} className={classes.card} className="shadow-lg" style={{ borderRadius: 15, backgroundColor: "#ffffff"}} >
              <Grid item xs={12} sm={12} md={12} >
              <CardContent>
                  <Typography variant="h5">
                  <h5  style={{color: "#00b8d4"}} className=" font-weight-bold pb-2 pt-1">Create Writter</h5>
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
                    <div className="form-group">
                        <h6 className="text-success">Upload Image</h6> 
                        <input onChange={handleChange("photo")} type="file" name="photo" accept="image" />
                    </div>
                    {successMessage()}
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
            &nbsp; &nbsp;
          </div>
          <Divider/>
          &nbsp; &nbsp;
          {getUsers.map((users, index) => {
            return(
              <Card className={classes.root}  className={classes.card} className="shadow mb-3" style={{ borderRadius: 10, backgroundColor: "#ffffff"}}>
              <Grid container spacing="2">
                <Grid item xs={12} sm={12} md={10} >
                  <div key={index}>
                      <p className="mt-2 ml-2" style={{color: "#ff3d00", fontSize: 20}}>{users.firstname} {users.lastname}</p>
                      <p className="ml-2 mb-2" >
                        <b style={{color: "#00c853", fontSize: 17}}>Email Address: </b>{users.email} <br/>
                        <b style={{color: "#263238", fontSize: 17}}>Phone Number: </b> {users.phone}
                      </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={2} >
                <div className="mr-4 mt-2 mb-4 float-right">
                  <button onClick={() => {
                      confirmAlert({
                      title: 'Delete:'+" "+users.firstname,
                      message: 'Are you sure you want to delete.',
                      buttons: [
                        {
                          label: 'Yes',
                          onClick: () => deleteUser(users._id)
                        },
                        {
                          label: 'No',
                          onClick: () => {}
                        }
                      ]
                      });
                      }} className="btn btn-outline-danger shadow" 
                          style={{ borderRadius: 15}}>
                          <center><DeleteForeverIcon style={{color: pink[500]}}/></center>
                  </button>
                </div>
                </Grid>
              </Grid>
            </Card>  
            )
          })}
          &nbsp; &nbsp;
        <InfoCard/>
     </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  
  window: PropTypes.func,
};

export default ResponsiveDrawer;
