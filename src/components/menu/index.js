import React from 'react';
import useStyles from './styles';

export default function Menu() {
  const classes = useStyles();

  return <div className={classes.menuContainer} />;
}
