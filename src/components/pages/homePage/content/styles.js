import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: '80vh',
    marginTop: '-80px',
    overflowX: 'hidden',
  },
  gridCard: {
    backgroundColor: '#fff',
    height: 400,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',

    marginTop: 50,
  },
  card: {
    marginRight: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 250,
    backgroundSize: '60%',
    backgroundPositionX: '110%',
    backgroundPositionY: '-2%',
    backgroundRepeat: 'no-repeat',
  },
}));

export default useStyles;
