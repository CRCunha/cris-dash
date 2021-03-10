import { React } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();
  const usersStates = useSelector((state) => state.user, []);

  // eslint-disable-next-line no-console
  console.log(usersStates.usersList);

  return (
    <div>
      <Grid continer>
        <Grid item xs={12}>
          <Grid className={classes.cardContainer} container justify="center">
            <Grid item xs={10}>
              {usersStates.usersList.map((value) => {
                return (
                  <Grid item xs={12} className={classes.gridCard}>
                    <Grid container>
                      <Grid
                        item
                        xs={2}
                        className={classes.cardAvatarItemAvatar}
                      >
                        <Avatar
                          className={classes.avatar}
                          alt={value.name}
                          src={value.name}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <p>Name: {value.name}</p>
                        <p>Email: {value.email}</p>
                        <p>Phonme: {value.phone}</p>
                        <p>Web Site: {value.website}</p>
                        <p>Company: {value.company.name}</p>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
