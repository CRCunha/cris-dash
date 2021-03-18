import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: 250,
    marginTop: '-80px',
  },
  cards: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: 480,
    backgroundColor: '#fff',
    height: 250,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    backgroundSize: '60%',
    backgroundPositionX: '100%',
    backgroundPositionY: '-2%',
    backgroundRepeat: 'no-repeat',
  },
  gridCard: {
    backgroundColor: '#fff',
    height: 400,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',

    marginTop: 50,
  },
}));

export default useStyles;
