import React from 'react';
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
  gameTitle: {
    fontSize: "2rem",
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary
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

function sayMonth(month) {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    return months[`${month-1}`]
};

const csrfToken = document.querySelector("[name='csrf-token']").content

const addToCart = (gid) => {
    fetch(`/games/${gid}/add_to_cart`, { method: 'POST', headers: { "X-CSRF-Token": csrfToken }})
    //then if we get a response route to cart
    //else nothing
};

const CartCard = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.containerStyle} maxWidth="sm">
        <div>{props.attributes.id} is in the cart</div>
      </Container>
      <p />
    </div>
    );
};

export default CartCard;
