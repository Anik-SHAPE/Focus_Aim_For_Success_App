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

const useStyles = makeStyles({
  root: {
     minWidth: 200,
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
    backgroundColor: '#FFFFFF',
  },
  
});

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Grid container spacing="4" >
        <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.root} className={classes.card} className="shadow d-block w-100 h-100" style={{ borderRadius: 20}}>
            <CardContent>
                <Typography className={classes.title} style={{color: "#f50057"}}  gutterBottom>
                <b>Content Writters</b>
                </Typography>
                <Typography variant="h5" component="h2" style={{color: "#2B2B52"}}>
                Total 0
                </Typography>
                <Typography className={classes.pos} style={{color: "#ff8f00"}} >
                Contents Created: 0
                </Typography>
          
                <Typography variant="body2" component="p" style={{color: "#009688"}}>
                Go to Content Crator Dashboard to watch in details
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <a href="/manage/writter" style={{textDecoration: "none"}}><Button size="small">Dashboard</Button></a>
            </CardActions>
            </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.root} className={classes.card} className="shadow d-block w-100 h-100" style={{ borderRadius: 20}}>
            <CardContent>
            <Typography className={classes.title} style={{color: "#00e676"}} gutterBottom>
                <b>Frenchaisee</b>
                </Typography>
                <Typography variant="h5" component="h2">
                Total 0
                </Typography>
                <Typography className={classes.pos} style={{color: "#ff8f00"}}>
                Angagement : 0
                </Typography>
          
                <Typography variant="body2" component="p" style={{color: "#009688"}}>
                Go to Frenchaisee Dashboard to watch in details.
                <br />
                </Typography>
            </CardContent>
            <CardActions>
              <a href="/manage/frenchaisee" style={{textDecoration: "none"}}>
                <Button size="small">Dashboard</Button>
              </a>
            </CardActions>
            </Card>
        </Grid>


        <Grid item xs={12} sm={6} md={4} >
            <Card className={classes.root}  className={classes.card} className="shadow d-block w-100 h-100" style={{ borderRadius: 20}}>
            <CardContent>
            <Typography className={classes.title} style={{color: "#03a9f4"}} gutterBottom>
                <b>Users</b>
                </Typography>
                <Typography variant="h5" component="h2">
                Total 0
                </Typography>
                <Typography className={classes.pos} style={{color: "#ff8f00"}} >
                Buyed Courses : 0
                </Typography>
       
                <Typography variant="body2" component="p" style={{color: "#009688"}}>
                Go to Users Dashboard to get full details of all users.
                <br />
                </Typography>
            </CardContent>
            <CardActions>
              <a href="/manage/users" style={{textDecoration: "none"}}>
                <Button size="small">Dashboard</Button>
              </a> 
            </CardActions>
            </Card>
        </Grid>

    </Grid>
  );
}
