import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleModal: {
    padding: '15px 0px 25px 0px',
    display: 'flex',
    alignItems: 'flex-end',
    fontSize: 25,
    height: 80,
  },
  buttonLogin: {
    marginTop: 25,
    backgroundColor: '#ea3561',
    color: '#fff',
    borderRadius: 10,
  },
}));

export default useStyles;
