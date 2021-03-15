import { React, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductActions from '../../../../store/modules/products/actions';
import ExplanatoryCard from '../../../explanatoryCard';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsStates = useSelector((state) => state.products, []);

  const getAllProducts = () => {
    axios
      .get('    https://fakestoreapi.com/products')
      .then((response) => {
        dispatch(ProductActions.setProductList(response.data));
        // eslint-disable-next-line no-console
        console.log('productsStates', productsStates.products);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

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
