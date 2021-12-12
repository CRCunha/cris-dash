import React from 'react';
import { Grid } from '@mui/material';
import useStyles from './styles';
import Content from './content';

export default function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={3} className={classes.gridCardImage} />
      <Grid item xs={9}>
        <Content />
      </Grid>
    </Grid>
  );
}
