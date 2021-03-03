import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menuContainer: {
    width: 80,
    backgroundColor: '#fff',
    height: '100vh',
  },
  logoMenu: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    '& img': {
      width: '65%',
    },
  },
  menuItensContainer: {
    marginTop: 30,
  },
  menuIten: {
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    border: 'none',
    transition: '.3s',
    cursor: 'pointer',
  },
  menuItenIcon: {
    fontSize: 30,
    width: '100%',
  },
}));

export default useStyles;
