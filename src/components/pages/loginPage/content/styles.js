import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
  },
  contentTitle: {
    fontWeight: 'bold',
    fontSize: 26,
    padding: '20px 0px',
  },
  mediaLogin: {
    marginBottom: 30,
  },
  googleBtn: {
    backgroundColor: '#6c85ff',
    color: '#fff',
    '& img': {
      width: 30,
      marginRight: 10,
    },
  },
  TtBtn: {
    backgroundColor: '#ddd',
    color: '#3f3f3f',
    display: 'flex',
    justifyContent: 'center',
    '& img': {
      width: 30,
      filter: 'grayscale(100%)',
    },
  },
  fieldText: {
    marginBottom: 20,
  },
}));

export default useStyles;
