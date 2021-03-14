import { React, useState } from 'react';
import { Grid, Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  // eslint-disable-next-line
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export default function Content() {
  const classes = useStyles();
  const usersStates = useSelector((state) => state.user, []);
  const [valueTab, setValueTab] = useState(0);

  const handleChange = (event, newValue) => {
    setValueTab(newValue);
  };

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
                      <Grid item xs={8}>
                        <Grid container alignItens="center">
                          <AppBar
                            position="static"
                            color="none"
                            className={classes.tabContainer}
                          >
                            <Tabs
                              value={value}
                              onChange={handleChange}
                              indicatorColor="primary"
                              textColor="primary"
                              variant="scrollable"
                              scrollButtons="auto"
                              aria-label="scrollable auto tabs example"
                            >
                              <Tab label="User Infos" {...a11yProps(0)} />
                              <Tab label="Adress Infos" {...a11yProps(1)} />
                              <Tab label="Company Infos" {...a11yProps(2)} />
                            </Tabs>
                          </AppBar>
                          <Grid item xs={12}>
                            <TabPanel value={valueTab} index={0}>
                              <Grid container>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Name: {value.name}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Email: {value.email}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Phonme: {value.phone}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Web Site: {value.website}
                                </Grid>
                              </Grid>
                            </TabPanel>
                          </Grid>
                          <Grid item xs={12}>
                            <TabPanel value={valueTab} index={1}>
                              <Grid container>
                                <Grid item xs={12} className={classes.tagItem}>
                                  City: {value.address.city}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Zipcode: {value.address.zipcode}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Street: {value.address.street}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Suite: {value.address.suite}
                                </Grid>
                              </Grid>
                            </TabPanel>
                          </Grid>
                          <Grid item xs={12}>
                            <TabPanel value={valueTab} index={2}>
                              <Grid container>
                                <Grid item xs={12} className={classes.tagItem}>
                                  BS: {value.company.bs}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  CatchPhrase: {value.company.catchPhrase}
                                </Grid>
                                <Grid item xs={12} className={classes.tagItem}>
                                  Company: {value.company.name}
                                </Grid>
                              </Grid>
                            </TabPanel>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={2} className={classes.cardImage} />
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
