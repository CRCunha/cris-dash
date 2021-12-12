import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer />
        </Grid>
      </Grid>
    </div>
  );
}
