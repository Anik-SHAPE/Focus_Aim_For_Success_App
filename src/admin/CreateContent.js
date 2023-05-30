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
import {getCourse, createPushSubjectToCourse, getAllSubjectByCourse, deleteSubject, getSubject, getChapter, createPushQuestionToChapter} from "./helper/adminapicall";
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

const Content = (props) => {

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
        <a href={`/manage/${props.match.params.subjectId}/${props.match.params.chapterId}/contents`} style={{textDecoration: 'none'}}>
        <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <ImportContactsRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}} primary="Content"/>
            </ListItem>
          </li>
          </a>
          <li class="nav-item active">
            <ListItem Button >
              <ListItemIcon>
                  <ImportContactsRoundedIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: purple[500]}} primary="Create Content"/>
            </ListItem>
          </li>
        <li class="nav-item">
          <a href={`/manage/${props.match.params.courseId}/${props.match.params.subjectId}/chapter`} style={{textDecoration: 'none'}}>
            <ListItem Button>
              <ListItemIcon>
                  <LibraryBooksIcon style={{color: pink[500]}}/>
              </ListItemIcon>
              <ListItemText style={{color: green[800]}}  primary="Chapters"/>
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

  const ManageContent = () => {
      
    const [chapter, setchapter] = useState({
        cname: "",
    });

    const [contents, setcontents] = useState({
        ques: "",
        chone: "",
        chtwo: "",
        chthree: "",
        chfour: "",
        ans: "",
        qdescription: "",
        qphoto: "",
        error: "",
        success: false,
        loading: false,
        formData: new FormData()
    });

    const {cname} = chapter;
    const {ques, chone, chtwo, chthree, chfour, ans, qdescription, qphoto, error, success, loading, formData} = contents;

    const {user, token} = isAuthenticated();

    const preload = (chapterId) => {
        getChapter(user._id, token, chapterId).then(data => {
            if(data.error){
                setchapter({...chapter, error: data.error});
            }else{
                setchapter({
                    ...chapter,
                    cname : data.cname,
                });
            }
        });
    }; 

    useEffect(() => {
        preload(props.match.params.chapterId);
    }, []);

    const onSubmit = event => {
        event.preventDefault();
        setcontents({...contents, error:"", loading: true});

        // Backend Request for contents
        createPushQuestionToChapter(user._id, token, props.match.params.chapterId, formData)
        .then(data => {
            if(data.error){
                setcontents({...contents, error: data.error});
            }else{
                setcontents({
                    ...contents,
                    ques: "",
                    chone: "",
                    chtwo: "",
                    chthree: "",
                    chfour: "",
                    ans: "",
                    qdescription: "",
                    qphoto: "",
                    loading: false,
                    success: true,
                });
            }
        });
    };

    const handleChange = name => event => {
        const value = name === "qphoto" ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setcontents({ ...contents, [name]: value });
    };

    const successMessage = () => {
        if (success) {
          return (
            <div className="row pt-3 pb-3" >
              <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-success shadow"  style={{ borderRadius: 30}}>
                  <center> <h4 className="text-success my-auto">Content Created Succesfully in {cname}</h4>
                  <h6 className=" pt-1 my-auto">Go to <a href="#" style={{textDecoration: "none"}}>Contents </a>to get the update</h6>
                    </center>
                </div>
              </div>
            </div>  
          )
        }
    };

    return(
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
              <h5 class="text-warning">{cname}</h5> <h6 class="my-auto font-weight-bolder">(Content Management )</h6>
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
                  <h5 className="font-weight-bold pb-2 pt-1" style={{color: "#019031"}}>Create Content</h5>
                  </Typography>
                  <Typography variant="body2" component="p">
                  <form>
                    <div className="form-group">
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="ques" 
                            type="text" placeholder="Question" onChange={handleChange("ques")}
                            value={ques}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="chone" 
                            type="text" placeholder="Option A" onChange={handleChange("chone")}
                            value={chone}/>
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="chtwo" 
                            type="text" placeholder="Option B" onChange={handleChange("chtwo")}
                            value={chtwo}/>
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="chthree" 
                            type="text" placeholder="Option C" onChange={handleChange("chthree")}
                            value={chthree}/>
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="chfour" 
                            type="text" placeholder="Option D" onChange={handleChange("chfour")}
                            value={chfour}/>
                    </div>
                
                    <div className="form-group">
                      <input className="form-control" style={{ borderRadius: 5, backgroundColor: "#eceff1"}} id="ans" 
                            type="text" placeholder="Answer" onChange={handleChange("ans")}
                            value={ans}/>
                    </div>
                    <div className="form-group">
                      <TextField fullWidth style={{backgroundColor: "#ffffff", borderRadius: 5}}
                                id="qdescription" placeholder="Write your content description here." 
                                label="Description" onChange={handleChange("qdescription")} multiline rows={4}  
                                variant="filled" value={qdescription}/>
                    </div>
                    <div className="form-group">
                    <h6 className="text-success">Upload Image</h6> 
                    <input onChange={handleChange("qphoto")} type="file" name="qphoto" accept="image" />
                    </div>
                    <div className="text-right">
                      <button type="submit" style={{ borderRadius: 5, backgroundColor:"#45CE30"}} className="btn text-white shadow"
                              onClick={onSubmit}> Create </button>
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
    )
  }
  
   return (
     <div>
        {ManageContent()}
     </div>
  )
}

export default Content;
