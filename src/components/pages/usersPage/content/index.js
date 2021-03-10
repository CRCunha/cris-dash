import { React } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const usersStates = useSelector((state) => state.user, []);

  // eslint-disable-next-line no-console
  console.log(usersStates.usersList);

  return (
    <div style={{ zIndex: 20 }}>
      <Grid continer className={classes.content}>
        <Grid item xs={12}>
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              <Grid container className={classes.cardContainerContent}>
                {usersStates.usersList.map((value) => {
                  return (
                    <Grid item xs={12} className={classes.cadUser}>
                      <p>{value.name}</p>
                      <p>{value.email}</p>
                      <p>{value.phone}</p>
                      <p>{value.website}</p>
                      <p>{value.company.name}</p>
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
