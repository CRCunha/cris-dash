import React from 'react';
import { Grid } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();

  return (
    <div className={classes.menuContainer}>
      <Grid continer>
        <Grid item xs={12} className={classes.logoMenu}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Altmetric_rgb_%28crop%29.png"
            alt="logotype"
          />
        </Grid>
        <Grid item xs={12} className={classes.menuItensContainer}>
          <Grid container justify="center">
            <Link to="/" className={classes.menuLink}>
              <Grid item xs={8} className={classes.menuIten}>
                <HomeRoundedIcon className={classes.menuItenIcon} />
              </Grid>
            </Link>

            <Link to="/user" className={classes.menuLink}>
              <Grid item xs={8} className={classes.menuIten}>
                <PersonRoundedIcon className={classes.menuItenIcon} />
              </Grid>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}