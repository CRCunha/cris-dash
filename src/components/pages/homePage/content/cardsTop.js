import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { ResponsivePie } from '@nivo/pie';
import { ResponsiveRadar } from '@nivo/radar';
import { ResponsiveWaffle } from '@nivo/waffle';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const chartStates = useSelector((state) => state.charts, []);

  return (
    <Grid item xs={12}>
      <Grid
        container
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          width: 'calc(100% + 50px)',
        }}
      >
        <Grid
          item
          xs={4}
          className={classes.card}
          style={{
            backgroundImage:
              'url(https://cdni.iconscout.com/illustration/premium/thumb/man-looking-at-his-mobile-notification-1886583-1598254.png)',
          }}
        >
          <ResponsivePie
            data={chartStates.pie}
            margin={{ top: 40, right: 75, bottom: 40, left: -140 }}
            innerRadius={0.5}
            padAngle={0.4}
            enableRadialLabels={false}
            cornerRadius={3}
            colors={{ scheme: 'nivo' }}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0]],
            }}
            radialLabelsSkipAngle={1}
            radialLabelsTextColor="#333333"
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsSkipAngle={10}
            sliceLabelsTextColor="#333333"
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: 'ruby',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'c',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'go',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'python',
                },
                id: 'dots',
              },
              {
                match: {
                  id: 'scala',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'lisp',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'elixir',
                },
                id: 'lines',
              },
              {
                match: {
                  id: 'javascript',
                },
                id: 'lines',
              },
            ]}
          />
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.card}
          style={{
            backgroundImage:
              'url(https://cdni.iconscout.com/illustration/premium/thumb/concept-of-online-transaction-1886571-1598242.png)',
          }}
        >
          <ResponsiveRadar
            data={chartStates.radar}
            keys={['chardonay', 'carmenere', 'syrah']}
            indexBy="taste"
            maxValue="auto"
            margin={{ top: 40, right: 100, bottom: 40, left: -140 }}
            curve="linearClosed"
            borderWidth={2}
            borderColor={{ from: 'color' }}
            gridLevels={5}
            gridShape="circular"
            gridLabelOffset={10000}
            enableDots
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            dotBorderColor={{ from: 'color' }}
            // enableDotLabel
            dotLabel="value"
            dotLabelYOffset={-12}
            colors={{ scheme: 'nivo' }}
            fillOpacity={0.15}
            blendMode="multiply"
            animate
            motionConfig="wobbly"
            isInteractive
          />
        </Grid>
        <Grid
          item
          xs={4}
          className={classes.card}
          style={{
            backgroundImage:
              'url(https://cdni.iconscout.com/illustration/premium/thumb/online-shopping-via-mobile-application-1886572-1598243.png)',
          }}
        >
          <ResponsiveWaffle
            data={chartStates.waffle}
            total={100}
            rows={10}
            columns={10}
            margin={{ top: 25, right: 110, bottom: 25, left: -120 }}
            colors={{ scheme: 'nivo' }}
            emptyColor="#fff"
            borderColor={{
              from: 'color',
              modifiers: [['darker', 0.3]],
            }}
            animate
            motionStiffness={90}
            motionDamping={11}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
