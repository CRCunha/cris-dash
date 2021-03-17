import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ResponsiveCalendar } from '@nivo/calendar';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const chartStates = useSelector((state) => state.charts, []);

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
              <Grid item xs={12} className={classes.gridCard}>
                <ResponsiveCalendar
                  className={classes.gridCard}
                  data={chartStates.calendar}
                  from="2015-03-01"
                  to="2016-07-12"
                  emptyColor="#eeeeee"
                  colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
                  margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                  yearSpacing={40}
                  monthBorderColor="#ffffff"
                  dayBorderWidth={2}
                  dayBorderColor="#ffffff"
                  legends={[
                    {
                      anchor: 'bottom-right',
                      direction: 'row',
                      translateY: 36,
                      itemCount: 4,
                      itemWidth: 42,
                      itemHeight: 36,
                      itemsSpacing: 14,
                      itemDirection: 'right-to-left',
                    },
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
