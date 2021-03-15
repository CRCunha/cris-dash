import { React } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
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
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              <ExplanatoryCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
