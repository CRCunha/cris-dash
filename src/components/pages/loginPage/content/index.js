import React from 'react';
import Grid from '@mui/material/Grid';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  return (
    <div item className={classes.loginPageContentContainer}>
      <Grid style={{ backgroundColor: '#3f3f3f' }} />
    </div>
  );
}
