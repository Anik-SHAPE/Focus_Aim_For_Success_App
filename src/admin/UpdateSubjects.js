import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import classnames from "classnames";
import shadows from '@material-ui/core/styles/shadows';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {isAuthenticated} from "../masterauth/helper/index";
import {Link} from "react-router-dom";
import {getCourse, createPushSubjectToCourse, getAllSubjectByCourse, deleteSubject, getSubject, updateSubject} from "./helper/adminapicall";
import {Grid, ButtonBase} from "@material-ui/core";
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
import { yellow, pink, green, grey, purple } from '@material-ui/core/colors';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import InfoCard from "./Card";
import Logo from "../assets/images/logo.png";
import Permissions from "../masterauth/helper/permissions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageFetcher from '../core/helper/subjectImageHelper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const drawerWidth = 240;

const toolbarStyle = {
  minHeight: '80px',
};


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minWidth: 200,
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
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    backgroundColor: '#ffffff',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ResponsiveDrawer = (props) => {
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
          <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <ImportContactsRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: purple[500]}} primary="Update Subject"/>
            </ListItem>
          </li>
        <li class="nav-item">
          <a href="/manage/course" style={{textDecoration: 'none'}}>
            <ListItem Button>
              <ListItemIcon>
                  <LibraryBooksIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Courses"/>
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
                <h6 className="my-auto"><Permissions/></h6>
          </ListItem>
        </a>
      </list>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const ManageSubject = () => {

    const [values, setValues] = useState({
      cname: "",
      formCourseData: new FormData()
    });


    const [subjects, setsubjects] = useState({
      sname: "",
      sphoto: "",
      sphoto_status: false,
      unlock: false,
      error: "",
      success: false,
      loading: false,
      formData: new FormData()
    });
 

    const {cname, formCourseData} = values;
    const { sname, sphoto, sphoto_status, unlock, error, success, loading, formData} = subjects;
    const {user, token} = isAuthenticated();
     
    

    const subload = (userId, token, subjectId) => {
        getSubject(userId, token, subjectId).then(data => {
          if(data.error){
            setsubjects({...subjects, error: data.error});
          }else{
              setsubjects({
                ...subjects,
                sname: data.sname,
                sphoto: data.sphoto,
                formData: new FormData()
              });
           }
        });
      }

      const preload = (courseId) => {
        getCourse(courseId).then(data => {
            if(data.error){
                setValues({...values, error: data.error});
            }else{
                setValues({
                    ...values,
                    cname: data.name,
                    formCourseData : new FormData()
                })
            }
        });
      };

      
      useEffect(() => {
            preload(props.match.params.courseId);
            subload(user._id, token, props.match.params.subjectId);
        }, []);
    
    

    const onSubmit =  event => {
      event.preventDefault();
      setsubjects({...subjects, error:"", loading: true});
  
      // Backend request
      updateSubject(user._id, token, props.match.params.subjectId, formData)
      .then(data => {
        if (data.error) {
          setsubjects({ ...subjects, error: data.error });
        } else {
          setsubjects({
            ...subjects,
            sname: "",
            sphoto: "",
            loading: false,
            success: true,
          });
        }
      });
    };
    
    
    const handleChange = name => event => {
      const value = name === "sphoto" ? event.target.files[0] : event.target.value;
      formData.set(name, value);
      setsubjects({ ...subjects, [name]: value });
    };
  
    
    const successMessage = () => {
      if (success) {
        return (
          <div className="row pt-3 pb-3" >
            <div className="col-md-6 offset-sm-3 text-left">
              <div className="alert alert-success shadow"  style={{ borderRadius: 30}}>
                <center> <h4 className="text-success my-auto">Subject updated succesfully on {cname}</h4>
                <h6 className=" pt-1 my-auto">Go to <a href={`/manage/course/${props.match.params.courseId}/subjects`} style={{textDecoration: "none"}}>subjects </a>and click on manage subjects to get the update</h6>
                  </center>
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
              <h4 class="my-auto font-weight-bolder">Update Subject on {cname} </h4>
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
            &nbsp; &nbsp;
            <Grid container spacing="4">
            
              <Grid item xs={12} sm={12} md={12} >
                  <Card className={classes.root} className={classes.card} style={{ borderRadius: 15}} className="shadow-lg" >
                  <CardContent>
                      <Typography variant="h5">
                      <h5 className="font-weight-bold pb-2 pt-1" style={{color: "#019031"}}>Subject</h5>
                      </Typography>
                      <Typography variant="body2" component="p">
                      <form >
                        <div className="form-group">
                          <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="subjectname" 
                                type="subjectname" placeholder="Subject Name" onChange={handleChange("sname")}
                                value={sname}/>
                        </div>
                      
                        <div className="form-group">
                        <h6 className="text-success">Upload Image</h6> 
                        <input onChange={handleChange("sphoto")} type="file" name="sphoto" accept="image" />
                        </div>
                        <div className="text-right">
                          <button type="submit" style={{ borderRadius: 5, backgroundColor:"#45CE30"}} className="btn text-white shadow" onClick={onSubmit}> Update </button>
                        </div>
                      </form>
                      </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            &nbsp; &nbsp;
            {successMessage()}
    
          </main>
      </div>
    );
  }

  return(
    <div>
      {ManageSubject()}  
     
    </div>
  )   
};

export default ResponsiveDrawer;
