import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

export default function ExplanatoryCard() {
  const classes = useStyles();

  return (
    <div className={classes.gridContainer}>
      <Grid continer className={classes.card}>
        <Grid item xs={8} className={classes.cardText}>
          <Grid continer>
            <p>
              Curabitur eget nunc non quam sagittis dignissim id et nisl.
              Quisque finibus bibendum eros et cursus.
            </p>
            <p>
              Nunc ac vulputate augue. Maecenas lobortis condimentum tempor.
              Aenean pharetra eleifend risus dignissim pulvinar. Donec sit amet
              quam non leo convallis.
            </p>
          </Grid>
        </Grid>
        <Grid item xs={2} className={classes.cardImage} />
      </Grid>
    </div>
  );
}
