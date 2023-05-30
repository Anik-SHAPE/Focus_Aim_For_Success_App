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
import {getCourse, createPushSubjectToCourse, getAllSubjectByCourse, deleteSubject, getSubject, getAllQuestionBySubject, deleteQuestion, getChapter} from "../admin/helper/adminapicall";
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
import Logo from "../assets/images/logo.png";
import Permissions from "../masterauth/helper/UserPermissonSignout";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ImageFetcher from '../core/helper/contentImageHelper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from 'react-bootstrap/Accordion';
import { Collapse, CardBody} from 'reactstrap';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert } from 'react-confirm-alert';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CreateIcon from '@material-ui/icons/Create';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';


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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
    backgroundColor: '#311b92',
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

const ManageContent = (props) => {

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
                  <PlayCircleFilledWhiteIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: purple[500]}} primary="Introduction"/>
            </ListItem>
          </li>
          <a href={`/courses/${props.match.params.subjectId}/${props.match.params.chapterId}/chapter/contents`} style={{textDecoration: 'none'}}>
          <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <ImportContactsRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}} primary="MCQ's"/>
            </ListItem>
          </li>
          </a>
          <a href={`/courses/${props.match.params.subjectId}/${props.match.params.chapterId}/videos`} style={{textDecoration: 'none'}}>
          <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <VideoLibraryIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}} primary="Videos"/>
            </ListItem>
          </li>
          </a>
        <a href={`#`} style={{textDecoration: 'none'}}>
          <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <EmojiObjectsIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}} primary="Test"/>
            </ListItem>
          </li>
        </a>
        <li class="nav-item">
          <a href={`/courses/${props.match.params.courseId}/${props.match.params.subjectId}/chapters`} style={{textDecoration: 'none'}}>
            <ListItem Button>
              <ListItemIcon>
                  <LibraryBooksIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Chapters"/>
            </ListItem>
          </a>
        </li>
        <li class="nav-item">
          <a href="/courses" style={{textDecoration: 'none'}}>  
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
        <a href={"/"}>
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

  // Get all content request from backend

  const GetContent = () => {

    const [chapter, setchapter] = useState({
      cname: "",
      introduction: ""
    });

    const {cname, introduction} = chapter;

    const {user, token} = isAuthenticated();

    const preload = (chapterId) => {
      getChapter(user._id, token, chapterId).then(data => {
          if(data.error){
              setchapter({...chapter, error: data.error});
          }else{
              setchapter({
                ...chapter,
                cname : data.cname,
                introduction : data.introduction,
              })
          }
      });
    };

    useEffect(() => {
      preload(props.match.params.chapterId);
    }, []);

    return(
      <div className={classes.root}>
        <CssBaseline />
        <AppBar style={{backgroundColor: '#0C090A',borderBottomLeftRadius: 15, borderBottomRightRadius: 15}} position="fixed" className={classes.appBar}>
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
              <h5 style={{color: "#ba68c8"}}>{cname}</h5> <h6 class="my-auto font-weight-bolder">( Introduction )</h6>
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
          <Grid container spacing="2">
            <Grid item xs={12} sm={12} md={12} >
            <Card className={classes.root}  className={classes.card} className="shadow-lg" style={{ backgroundColor: "#ffffff", borderBottomLeftRadius: 20, borderTopRightRadius: 20}}>
            <h4 className="m-3" style={{color: "#00c853"}}>{cname}</h4><br/>
            <p className="ml-3 mr-3 mb-3 text-justify" style={{fontSize: 18, whiteSpace: "pre-line", wordWrap: "break-word"}}>{introduction}</p>
            </Card>
            </Grid>
        </Grid>
        <Link className="pt-4 float-right pr-2" to={`/courses/${props.match.params.subjectId}/${props.match.params.chapterId}/chapter/contents`} style={{textDecoration: "none"}}>
          <button className="nav-link shadow btn btn-outline-primary" style={{borderRadius: 20}}>Next &nbsp; <ArrowForwardIcon/></button>
        </Link>
        </main>
      </div>
    )

  }

  return (
    <div>
      {GetContent()}
    </div>
  )
}

export default ManageContent;
