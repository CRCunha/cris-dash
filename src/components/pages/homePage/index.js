import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './header';
import Content from './content';
import useStyles from './styles';

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer>
            <Header />
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
