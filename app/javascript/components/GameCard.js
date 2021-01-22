import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GameCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container style={{textAlign:'center', backgroundColor: 'lightgrey', borderRadius: '4px'}} maxWidth="sm">
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <img src='logos/Paint_Valley.jpg' alt="logo"/>
                <div className={classes.paper}>Paint Valley</div>
            </Grid>
            <Grid item xs={6}>
                <img src='logos/Adena.png' alt="logo"/>
                <div className={classes.paper}>Adena</div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.paper}>Girls Middle School Basketball</div>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.paper}>
                    <Icon>room</Icon>
                    Paint Valley High School
                </div>
                <Paper className={classes.paper}>Details or advertisement here</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>
                    <time className={classes.paper}>
                        Insert Datetime here
                    </time>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary">
                    GET TICKETS
                </Button>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default GameCard