import React from 'react';
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
              <div className={classes.cards}>
                <div
                  className={classes.card}
                  style={{
                    backgroundImage:
                      'url(https://cdni.iconscout.com/illustration/premium/thumb/man-looking-at-his-mobile-notification-1886583-1598254.png)',
                  }}
                />
                <div
                  className={classes.card}
                  style={{
                    backgroundImage:
                      'url(https://cdni.iconscout.com/illustration/premium/thumb/concept-of-online-transaction-1886571-1598242.png)',
                  }}
                />
                <div
                  className={classes.card}
                  style={{
                    backgroundImage:
                      'url(https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-via-mobile-application-1886572-1598243.png)',
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
