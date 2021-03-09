import { React } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  // eslint-disable-next-line no-console
  // console.log('User Page', userStates);

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              <Grid container>asdasd</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
