import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContainer: {
    height: '80vh',
    marginTop: '-60px',
    overflow: 'auto',
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
  },
  gridCard: {
    backgroundColor: '#fff',
    minHeight: 300,
    borderRadius: 10,
    boxShadow: '0 20px 30px -16px rgba(9,9,16,0.03)',
    padding: 30,
    marginBottom: 50,
  },
  cardAvatarItemAvatar: {
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    fontSize: 30,
  },
}));

export default useStyles;
