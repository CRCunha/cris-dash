import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function ProductPage() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer>Product</Grid>
        </Grid>
      </Grid>
    </div>
  );
}
