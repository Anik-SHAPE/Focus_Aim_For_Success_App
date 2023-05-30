import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import { pink } from '@material-ui/core/colors';
import classnames from "classnames";
import shadows from '@material-ui/core/styles/shadows';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import BorderColorRoundedIcon from '@material-ui/icons/BorderColorRounded';
import Chip from '@material-ui/core/Chip';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

const useStyles = makeStyles({
  root: {
     minWidth: 200,
     display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
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
  card: {
    backgroundColor: '#ffffff',
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;


  return (
    <Grid container spacing="4">

        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#e3f2fd"}} >
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                &nbsp;&nbsp;<Chip style={{backgroundColor: "#2196f3", fontSize: 18}} className="shadow text-white" label="Management Roles"/>
                </Typography>
                <IconButton color="secondary"> 
                  <PeopleRoundedIcon/><h6 className="my-auto ">&nbsp;Users:</h6>
                </IconButton><br/>
                  <div  className="row pl-3">
                      <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Add Users"/>
                      <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Update User info"/>
                      <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Track User activity"/>
                  </div>
                <IconButton color="secondary"> 
                  <LinkRoundedIcon/><h6 className="my-auto ">&nbsp;Frenchaisee:</h6>
                </IconButton><br/>
                <div  className="row pl-3">
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Add Frenchaisee"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Track Frenchaisee activity"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Link Engagement"/>
                </div>
                <IconButton color="secondary"> 
                  <BorderColorRoundedIcon/><h6 className="my-auto ">&nbsp;Writters:</h6>
                </IconButton><br/>
                <div  className="row pl-3">
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Add Writter"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Track Writters activity"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Contents tracker"/>
                </div>
                <IconButton color="secondary"> 
                  <ImportContactsRoundedIcon/><h6 className="my-auto ">&nbsp;Courses:</h6>
                </IconButton><br/>
                <div  className="row pl-3">
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Manage course & subjects"/>
                  <Chip style={{backgroundColor: "#ffffff"}} className="shadow m-2" label="Content Create"/>
                </div>
                
            </CardContent>
            </Card>
        </Grid>

        <Divider/>

        <Grid item xs={12} sm={12} md={6} >
            <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 20, backgroundColor: "#f3e5f5"}}>
              <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    &nbsp;&nbsp;<Chip style={{backgroundColor: "#f50057", fontSize: 18}} className="shadow text-white" label="User Guide"/>
                  </Typography>
                  <IconButton style={{color: "#1976d2"}}> 
                  <PeopleRoundedIcon/><h6 className="my-auto ">&nbsp;Users:</h6>
                </IconButton><br/>
                 <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 15, backgroundColor: "#ffffff"}}>
                  <h6 className="pt-3 p-3" style={{fontSize: 15, color: "#ff6f00"}}>Users will be able to access the home page & the couse section. 
                     In the course section they will be able to access the courses.
                  </h6>
                </Card>
                <IconButton style={{color: "#1976d2"}}> 
                  <LinkRoundedIcon/><h6 className="my-auto ">&nbsp;Frenchaisee:</h6>
                </IconButton><br/>
                <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 15, backgroundColor: "#ffffff"}}>
                  <h6 className="pt-3 p-3" style={{fontSize: 15, color: "#00c853"}}>Frenchaisee's will be able share the course links to gather more engagement. 
                  </h6>
                </Card>
                <IconButton style={{color: "#1976d2"}}> 
                  <BorderColorRoundedIcon/><h6 className="my-auto ">&nbsp;Writter:</h6>
                </IconButton><br/>
                <Card className={classes.root} className="shadow d-block w-100 h-100" style={{ borderRadius: 15, backgroundColor: "#ffffff"}}>
                  <h6 className="pt-3 p-3" style={{fontSize: 15, color: "#9c27b0"}}>Content Writters will be able to provide contents on the following
                   subjects of a course. 
                  </h6>
                </Card>
              </CardContent>
            </Card>
        </Grid>

        
       
    </Grid>
  );
}
