import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  calendarTop: {
    backgroundColor: "orange", 
    borderRadius: "4px", 
    border: "1px solid grey",
    marginLeft: "40px",
    marginRight: "40px",
  },
  month: {
    fontSize: "1rem"
  },
  calendarCard: {
    paddingBottom: 0 //some reason won't work...
    // https://stackoverflow.com/questions/54236623/cant-remove-padding-bottom-from-card-content-in-material-ui
  },
  calendarBottom: {
    backgroundColor: "white", 
    borderBottomLeftRadius: "4px", 
    borderBottomRightRadius:"4px",
    borderTop: "1px solid grey",
    fontSize: "3rem",
    padding: 1
  },
  containerStyle: {
    textAlign: "center",
    backgroundColor: "lightgrey",
    borderRadius: "4px",
  }
}));

const GameCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.containerStyle} maxWidth="sm">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src="logos/Paint_Valley.jpg" alt="logo" />
            <Typography className={classes.paper}>Paint Valley</Typography>
          </Grid>
          <Grid item xs={6}>
            <img src="logos/Adena.png" alt="logo" />
            <Typography className={classes.paper}>Adena</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.paper}>Girls Middle School Basketball</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.paper}>
              <Icon>room</Icon>
              Paint Valley High School
            </Typography>
            <Paper className={classes.paper}>
              <Typography>Details or advertisement here</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Card>
                <CardContent className={classes.calendarCard}>
                    <div className={classes.calendarTop}>
                        <Typography className={classes.month}>September</Typography>
                        <Typography className={classes.calendarBottom}>20</Typography>
                    </div>
                    <Typography>Saturday</Typography>
                    <Typography>7:00pm</Typography>
                </CardContent>
            </Card>
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
};

export default GameCard;
