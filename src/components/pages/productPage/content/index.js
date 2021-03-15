import { React } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import ExplanatoryCard from '../../../explanatoryCard';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  const productsStates = useSelector((state) => state.products, []);
  // eslint-disable-next-line no-console
  console.log('productsStates', productsStates.products);

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item xs={10}>
              <ExplanatoryCard />
              <Grid
                container
                style={{
                  marginTop: 20,
                  overflow: 'auto',
                  height: '51vh',
                }}
              >
                {productsStates.products.map((value) => {
                  return (
                    <Grid item xs={12}>
                      <Grid
                        container
                        alignItems="center"
                        className={clsx(classes.drawer, {
                          [classes.gridCardError]: value.price < 50.0,
                          [classes.gridCardWarning]:
                            value.price >= 50.0 && value.price < 100.0,
                          [classes.gridCardOk]: value.price > 100.0,
                        })}
                      >
                        <Grid item xs={4}>
                          {value.title}
                        </Grid>
                        <Grid item xs={1}>
                          {value.price}
                        </Grid>
                        <Grid item xs={1}>
                          {value.category}
                        </Grid>
                        <Grid item xs={6} style={{ paddingLeft: 10 }}>
                          {value.description}
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
