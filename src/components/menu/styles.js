import { makeStyles } from '@mui/material/styles';

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
      width: '60%',
    },
  },
  menuItensContainer: {
    marginTop: 30,
  },
  menuIten: {
    height: 55,
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
    fontSize: 28,
    width: '100%',
  },
  menuLink: {
    width: '100%',
    display: 'flex',
    marginBottom: 20,
    justifyContent: 'center',
  },

  divider: {
    marginBottom: 20,
    color: 'transparent',
  },
}));

export default useStyles;
