import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headerContainer: {
    backgroundColor: '#3f3f3f',
    height: 250,
    backgroundImage: 'url(https://i.redd.it/iibrptucse951.png)',
    backgroundSize: 'cover',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  loginButton: {
    borderRadius: 5,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: 40,
    padding: '0 30px',
    marginTop: '100px',
    backgroundColor: '#fff',
    color: '#3f3f3f',
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    border: 'none',
  },
}));

export default useStyles;
