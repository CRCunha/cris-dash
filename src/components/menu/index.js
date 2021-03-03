import React from 'react';
import { Grid } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
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
            <Grid item xs={8} className={classes.menuIten}>
              <HomeRoundedIcon className={classes.menuItenIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
