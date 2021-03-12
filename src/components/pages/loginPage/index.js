import { React } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer>Login Page</Grid>
        </Grid>
      </Grid>
    </div>
  );
}
