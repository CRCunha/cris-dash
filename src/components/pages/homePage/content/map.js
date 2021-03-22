import React from 'react';
import { Grid } from '@material-ui/core';
import { ResponsiveChoropleth } from '@nivo/geo';
import { useSelector } from 'react-redux';
import { ResponsiveSwarmPlot } from '@nivo/swarmplot';
import countries from './world_countries.json';

import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const chartStates = useSelector((state) => state.charts, []);

  return (
    <Grid item xs={12} className={classes.BottomContent}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={7} className={classes.mapChart}>
              <ResponsiveChoropleth
                data={chartStates.map}
                features={countries.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 40 }}
                colors="nivo"
                domain={[0, 1000000]}
                unknownColor="#eee"
                label="properties.name"
                valueFormat=".2s"
                projectionTranslation={[0.5, 0.5]}
                projectionRotation={[0, 0, 0]}
                enableGraticule
                graticuleLineColor="#dddddd"
                borderWidth={0.5}
                borderColor="#3f3f3f"
                legends={[
                  {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: -10,
                    translateY: -220,
                    itemsSpacing: 5,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: 'hover',
                        style: {
                          itemTextColor: '#3f3f3f',
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]}
              />
            </Grid>
            <Grid item xs={5} className={classes.swarm}>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
