import { React } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Header from '../../header';
import Content from './content';

export default function UsersPage() {
  const classes = useStyles();

  // eslint-disable-next-line no-console
  // console.log('Home Page', userStates);

  return (
    <div className={classes.gridContainer}>
      <Grid continer>
        <Grid item xs={12}>
          <Grid continer className={classes.teste}>
            <Header />
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
