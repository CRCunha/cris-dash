import React from 'react';
import useStyles from './styles';

export default function Content() {
  const classes = useStyles();

  return <div item className={classes.loginPageContentContainer} />;
}
