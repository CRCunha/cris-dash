import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './header';
import useStyles from './styles';

export default function UserPage() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer>
            <Header />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
