import React from 'react';
import { Grid } from '@material-ui/core';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot';
import { useSelector } from 'react-redux';

import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const chartStates = useSelector((state) => state.charts, []);

  return (
    <Grid item xs={12} className={classes.BottomContent}>
      <Grid container>
        {/* Item 1 */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4} className={classes.leftContentChart}>
              <ResponsiveSwarmPlot
                data={chartStates.swarm}
                groups={['group A', 'group B', 'group C']}
                value="price"
                valueFormat="$.2f"
                valueScale={{
                  type: 'linear',
                  min: 0,
                  max: 500,
                  reverse: false,
                }}
                size={{ key: 'volume', values: [4, 20], sizes: [6, 20] }}
                forceStrength={4}
                simulationIterations={100}
                colorBy="group"
                borderColor={{
                  from: 'color',
                  modifiers: [
                    ['darker', 0.6],
                    ['opacity', 0.5],
                  ],
                }}
                margin={{ top: 45, right: 100, bottom: 45, left: 100 }}
                motionStiffness={50}
                motionDamping={10}
              />
            </Grid>
            <Grid item xs={8} className={classes.leftContentText}>
              Proin vitae dolor rhoncus metus consectetur aliquet vitae ac nunc.
              Mauris lacinia aliquet mi, ac dapibus urna eleifend ac. Maecenas
              mattis commodo massa, sed imperdiet massa maximus a. Vestibulum
              ante ipsum primis in faucibus orci luctus et ultrices posuere
              cubilia curae.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
