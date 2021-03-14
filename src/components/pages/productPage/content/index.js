import { React } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              Product
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}