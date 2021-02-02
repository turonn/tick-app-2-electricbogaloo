import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 100,
    justifyContent: 'center'
  },
});

const BottomBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href='/games' label="Games" icon={<SportsBasketballIcon />} />
      <BottomNavigationAction href='/cart' label="Cart" icon={<ShoppingCartIcon />} />
      <BottomNavigationAction href='/users' label="My Account" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}

export default BottomBar