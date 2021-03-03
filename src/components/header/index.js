import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Grid continer className={classes.headerContainer}>
        <Grid item xs={12} />
      </Grid>
    </div>
  );
}
