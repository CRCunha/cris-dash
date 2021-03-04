import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    '& :focus': {
      outline: 'none',
    },
  },
  paper: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
}));

export default useStyles;
